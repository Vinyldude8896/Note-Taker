const express = require('express');

const PORT = 3001;
const app = express();


const {notes } = require('./db/db.json');

app.get('/api/notes', (req, res) => {
  res.send("What's up Buttercup?!")
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});