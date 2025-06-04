import express from 'express';
import { updateReview, deleteReview } from '../controllers/review.controller.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();

router.put('/:id', authenticate, updateReview);
router.delete('/:id', authenticate, deleteReview);

export default router;
