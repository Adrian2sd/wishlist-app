import type { Item } from './wishlistApi';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Error ${res.status}`);
  }

  return res.json();
}

export const getItems = () => apiFetch<Item[]>('/items');
export const getItem = (id: string) => apiFetch<Item>(`/items/${id}`);
export const createItem = (data: Omit<Item, 'id'>) =>
  apiFetch<Item>('/items', { method: 'POST', body: JSON.stringify(data) });

export const updateItem = (id: string, data: Partial<Omit<Item, 'id'>>) =>
  apiFetch<Item>(`/items/${id}`, { method: 'PUT', body: JSON.stringify(data) });

export const deleteItem = (id: string) =>
  apiFetch<{ message: string }>(`/items/${id}`, { method: 'DELETE' });