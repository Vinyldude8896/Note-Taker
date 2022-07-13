const router = require('express').Router();
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const htmlRoutes = require('./Routes/Api_routes')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// const {notes} = require('./db/db.json');

// app.get('/api/notes', (req, res) => {
//   res.json(notes);
// });

// USe api routes

app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

module.exports = router;