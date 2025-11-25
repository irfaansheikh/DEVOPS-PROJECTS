const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: "Hello from DevOps Project 1", env: process.env.NODE_ENV || 'dev' });
});

app.listen(port, () => console.log(`Listening on ${port}`));
