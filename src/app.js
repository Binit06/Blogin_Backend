const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;

