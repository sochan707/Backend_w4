import express from 'express';
import * as controller from '../controllers/dataController.js'; // adjust path if needed

const router = express.Router();

// =================== GET all ===================
router.get('/journalists', controller.getAllJournalists);
router.get('/categories', controller.getAllCategories);
router.get('/articles', controller.getAllArticles);

// =================== GET by ID ===================
router.get('/journalists/:id', controller.getJournalist);
router.get('/categories/:id', controller.getCategory);
router.get('/articles/:id', controller.getArticle);

// =================== CREATE ===================
router.post('/journalists', controller.createJournalist);
router.post('/categories', controller.createCategory);
router.post('/articles', controller.createArticle);

export default router;