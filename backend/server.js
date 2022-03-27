const dotenv = require('dotenv').config();
const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 8000;

const app = express();

// MongoDB configuration
connectDB();

// json body parsing
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Custome errorHandler middleware
app.use(errorHandler);

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
