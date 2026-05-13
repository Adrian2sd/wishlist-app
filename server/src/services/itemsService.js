import { v4 as uuidv4 } from 'uuid';

// Array en memoria que simula una base de datos
let items = [];

export const getAllItems = () => items;

export const getItemById = (id) => items.find(item => item.id === id) || null;

export const createItem = (data) => {
  const newItem = {
    id: uuidv4(), // id único realista
    name: data.name,
    description: data.description || '',
    price: data.price ? Number(data.price) : 0,
    link: data.link || '',
    priority: data.priority || 'media',
    category: data.category || '',
  };
  items.push(newItem);
  return newItem;
};

export const updateItem = (id, data) => {
  const index = items.findIndex(item => item.id === id);
  if (index === -1) return null;
  // No permitimos cambiar el id, el resto se sobreescribe
  items[index] = { ...items[index], ...data, id };
  return items[index];
};

export const deleteItem = (id) => {
  const initialLength = items.length;
  items = items.filter(item => item.id !== id);
  return items.length < initialLength; // true si se eliminó alguno
};