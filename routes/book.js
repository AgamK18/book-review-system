import express from 'express';
import { addBook, getBooks, getBookById, searchBooks } from '../controllers/book.js';
import { authenticate } from '../middlewares/auth.js';
import { addReview } from '../controllers/review.js';

const router = express.Router();

router.get('/', getBooks);
router.get('/search', searchBooks);
router.get('/:id', getBookById);
router.post('/', authenticate, addBook);
router.post('/:id/reviews', authenticate, addReview);

export default router;