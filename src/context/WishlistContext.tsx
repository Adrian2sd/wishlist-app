import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import * as api from '../api/client';

interface WishlistContextType {
  items: Item[];
  loading: boolean;
  error: string | null;
  refreshItems: () => void;
  addItem: (data: Omit<Item, 'id'>) => Promise<void>;
  editItem: (id: string, data: Partial<Omit<Item, 'id'>>) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getItems();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const refreshItems = () => fetchItems();

  const addItem = async (data: Omit<Item, 'id'>) => {
    await api.createItem(data);
    await fetchItems();
  };

  const editItem = async (id: string, data: Partial<Omit<Item, 'id'>>) => {
    await api.updateItem(id, data);
    await fetchItems();
  };

  const removeItem = async (id: string) => {
    await api.deleteItem(id);
    await fetchItems();
  };

  return (
    <WishlistContext.Provider value={{ items, loading, error, refreshItems, addItem, editItem, removeItem }}>
      {children}
    </WishlistContext.Provider>
  );
};