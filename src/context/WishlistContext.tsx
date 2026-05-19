import { createContext, useState, useEffect, ReactNode } from 'react';
import type { Item } from '../api/wishlistApi';
import * as api from '../api/wishlistApi';
import { useAuth } from '../hooks/useAuth';

interface WishlistContextType {
  items: Item[];
  loading: boolean;
  error: string | null;
  refreshItems: () => void;
  addItem: (data: Omit<Item, 'id' | 'user_id' | 'created_at'>) => Promise<void>;
  editItem: (id: number, data: Partial<Omit<Item, 'id' | 'user_id' | 'created_at'>>) => Promise<void>;
  removeItem: (id: number) => Promise<void>;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchItems = async () => {
    if (!user) {
      setItems([]);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await api.fetchItems();
      setItems(data);
    } catch (err: any) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [user]);

  const refreshItems = () => fetchItems();

  const addItem = async (data: Omit<Item, 'id' | 'user_id' | 'created_at'>) => {
    await api.createItem(data);
    await fetchItems();
  };

  const editItem = async (id: number, data: Partial<Omit<Item, 'id' | 'user_id' | 'created_at'>>) => {
    await api.updateItem(id, data);
    await fetchItems();
  };

  const removeItem = async (id: number) => {
    await api.deleteItem(id);
    await fetchItems();
  };

  return (
    <WishlistContext.Provider value={{ items, loading, error, refreshItems, addItem, editItem, removeItem }}>
      {children}
    </WishlistContext.Provider>
  );
};