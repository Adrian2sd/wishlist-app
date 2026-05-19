import { supabase } from '../supabaseClient';

// Esta interfaz reemplaza a la antigua Item (global). La podemos mantener global o exportarla desde aquí.
export interface Item {
  id: number;            // BIGINT → number en JS
  user_id: string;       // UUID del usuario
  name: string;
  description: string;
  price: number;
  link: string;
  priority: 'alta' | 'media' | 'baja';
  category: string;
  created_at: string;
}

// Obtener todos los deseos del usuario autenticado (RLS se encarga de filtrar)
export const fetchItems = async (): Promise<Item[]> => {
  const { data, error } = await supabase
    .from('wishlist_items')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data as Item[];
};

// Crear un nuevo deseo
export const createItem = async (item: Omit<Item, 'id' | 'user_id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('wishlist_items')
    .insert(item)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
};

// Actualizar un deseo
export const updateItem = async (id: number, updates: Partial<Omit<Item, 'id' | 'user_id' | 'created_at'>>) => {
  const { data, error } = await supabase
    .from('wishlist_items')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
};

// Eliminar un deseo
export const deleteItem = async (id: number) => {
  const { error } = await supabase
    .from('wishlist_items')
    .delete()
    .eq('id', id);
  if (error) throw new Error(error.message);
};