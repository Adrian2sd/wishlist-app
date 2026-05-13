import { Router } from 'express';
import {
  listItems,
  getItem,
  createNewItem,
  updateExistingItem,
  deleteExistingItem,
} from '../controllers/itemsController.js';

const router = Router();

router.get('/', listItems);
router.get('/:id', getItem);
router.post('/', createNewItem);
router.put('/:id', updateExistingItem);
router.delete('/:id', deleteExistingItem);

export default router;