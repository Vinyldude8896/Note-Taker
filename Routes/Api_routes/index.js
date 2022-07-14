const router = require('express').Router();
const notesRoute = require('../Api_routes/notes');

router.use(notesRoute);

module.exports = router;