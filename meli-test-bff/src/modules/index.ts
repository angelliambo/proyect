import { Router } from 'express';
import SearchController from './items/controller';

const router = Router();
const controller = new SearchController();

router.get('/items/', (req, res) => controller.searchItems(req, res));
router.get('/items/:id', (req, res) => controller.getItemById(req, res));
router.get('/items/:id/description', (req, res) => controller.getItemDescription(req, res));

export default router;