const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes');


router.get('/api/notes', (req, res) => {

    let result = notes;
    console.log("notes", result)
    if (result) {
        res.json(result);
    } else {
        console.log("results not found")
        res.send(404);
    } 
})


router.post('/api/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    console.log(note);
    res.json(note);
});

module.exports = router;