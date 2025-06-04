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

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management and reviews
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books with optional filters and pagination
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: author
 *         schema:
 *           type: string
 *         description: Filter by author (partial, case-insensitive)
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *         description: Filter by genre (exact match)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of books per page
 *     responses:
 *       200:
 *         description: List of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *
 *   post:
 *     summary: Add a new book (authenticated users only)
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Book data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookInput'
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Failed to add book
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get book details by ID, including average rating and reviews (paginated)
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Book ID
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for reviews pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 5
 *         description: Number of reviews per page
 *     responses:
 *       200:
 *         description: Book details with average rating and paginated reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 book:
 *                   $ref: '#/components/schemas/Book'
 *                 averageRating:
 *                   type: number
 *                   format: float
 *                 reviews:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Review'
 *       404:
 *         description: Book not found
 */

/**
 * @swagger
 * /books/{id}/reviews:
 *   post:
 *     summary: Submit a review for a book (one review per user per book)
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Book ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Review data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReviewInput'
 *     responses:
 *       201:
 *         description: Review added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       400:
 *         description: Already reviewed or validation failed
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /books/search:
 *   get:
 *     summary: Search books by title or author (partial, case-insensitive)
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for title or author
 *     responses:
 *       200:
 *         description: List of books matching search query
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
