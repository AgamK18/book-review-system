import Book from '../models/book.js';
import Review from '../models/review.js';

export const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: 'Failed to add book', error: err.message });
  }
};

export const getBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 10 } = req.query;
  const filter = {};
  if (author) filter.author = new RegExp(author, 'i');
  if (genre) filter.genre = genre;

  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(books);
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const reviews = await Review.find({ book: book._id });
    const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);

    res.json({ book, averageRating, reviews });
  } catch (err) {
    res.status(404).json({ message: 'Book not found' });
  }
};

export const searchBooks = async (req, res) => {
  const { q } = req.query;
  const regex = new RegExp(q, 'i');
  const books = await Book.find({ $or: [{ title: regex }, { author: regex }] });
  res.json(books);
};