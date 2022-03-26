const dotenv = require('dotenv').config();
const express = require('express');

const app = express();

app.get('/api/goals', (req, res) => {
  res.status(200).json({
    message: 'get goals',
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
