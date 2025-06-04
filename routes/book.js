import express from 'express';
import { addBook, getBooks, getBookById, searchBooks } from '../controllers/book.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { addReview } from '../controllers/review.controller.js';

const router = express.Router();

router.get('/', getBooks);
router.get('/search', searchBooks);
router.get('/:id', getBookById);
router.post('/', authenticate, addBook);
router.post('/:id/reviews', authenticate, addReview);

export default router;