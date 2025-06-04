import express from 'express';
import { updateReview, deleteReview } from '../controllers/review.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();

router.put('/:id', authenticate, updateReview);
router.delete('/:id', authenticate, deleteReview);

export default router;

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Update and delete your own reviews
 */

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Update your own review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Review ID
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Review update data (rating, comment)
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReviewInput'
 *     responses:
 *       200:
 *         description: Review updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       403:
 *         description: Unauthorized (not your review)
 *       400:
 *         description: Update failed
 *       401:
 *         description: Unauthorized
 *
 *   delete:
 *     summary: Delete your own review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Review ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *       403:
 *         description: Unauthorized (not your review)
 *       400:
 *         description: Delete failed
 *       401:
 *         description: Unauthorized
 */
