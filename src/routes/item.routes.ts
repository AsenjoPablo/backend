import { Router } from 'express';
import * as itemController from './item.controller';

const router = Router();

// CRUD

// create
router.post('/items', itemController.createItem);

//read
router.get('/items', itemController.getItems);
router.get('/items/:id', itemController.getItem);

// update
router.put('/items/:id', itemController.updateItem);

// delete
router.delete('/items/:id', itemController.deleteItem);

export default router;