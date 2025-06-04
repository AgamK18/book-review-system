import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.routes.js';
import bookRoutes from './routes/book.routes.js';
import reviewRoutes from './routes/review.routes.js';

const app = express();

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 3000, () => console.log('Server running'));
});