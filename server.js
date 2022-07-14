const router = require('express').Router();
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const htmlRoutes = require('./Routes/HTML_routes')
const notesRoutes = require('./Routes/Api_routes')


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));

// const {notes} = require('./db/db.json');

// app.get('/api/notes', (req, res) => {
//   res.json(notes);
// });

// USe api routes

app.use('/', htmlRoutes);
app.use(notesRoutes);
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

module.exports = router;