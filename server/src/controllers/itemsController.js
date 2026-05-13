import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from '../services/itemsService.js';

export const listItems = (req, res) => {
  const items = getAllItems();
  res.json(items);
};

export const getItem = (req, res) => {
  const item = getItemById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Item no encontrado' });
  }
  res.json(item);
};

export const createNewItem = (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'El nombre es obligatorio' });
  }
  const item = createItem(req.body);
  res.status(201).json(item);
};

export const updateExistingItem = (req, res) => {
  const { name } = req.body;
  if (name !== undefined && (typeof name !== 'string' || name.trim() === '')) {
    return res.status(400).json({ message: 'El nombre no puede estar vacío' });
  }
  const updated = updateItem(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ message: 'Item no encontrado' });
  }
  res.json(updated);
};

export const deleteExistingItem = (req, res) => {
  const deleted = deleteItem(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Item no encontrado' });
  }
  res.json({ message: 'Item eliminado' });
};