import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Review API',
      version: '1.0.0',
      description: 'API for managing books and reviews with user authentication',
    },
    servers: [
      {
        url: 'http://localhost:3000/',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' },
          },
        },
        Book: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            title: { type: 'string' },
            author: { type: 'string' },
            genre: { type: 'string' },
            description: { type: 'string' },
            createdBy: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        BookInput: {
          type: 'object',
          required: ['title', 'author', 'genre'],
          properties: {
            title: { type: 'string', example: 'The Great Gatsby' },
            author: { type: 'string', example: 'F. Scott Fitzgerald' },
            genre: { type: 'string', example: 'Classic' },
            description: { type: 'string', example: 'A classic American novel...' },
          },
        },
        Review: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            user: { type: 'string' },
            book: { type: 'string' },
            rating: { type: 'integer', format: 'int32' },
            comment: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        ReviewInput: {
          type: 'object',
          required: ['rating'],
          properties: {
            rating: { type: 'integer', format: 'int32', minimum: 1, maximum: 5, example: 4 },
            comment: { type: 'string', example: 'Really enjoyed this book.' },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: [
      { name: 'Auth', description: 'User authentication' },
      { name: 'Books', description: 'Book management and reviews' },
      { name: 'Reviews', description: 'Update and delete your own reviews' },
    ],
  },
  apis: ['./routes/*.js'], // Path to files with JSDoc comments
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default setupSwagger;