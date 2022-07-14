const router = require('express').Router();
const {notes} = require('../../db/db.json');

router.get('/api/notes', (req, res) => {

    let result = notes;
    if (result) {
        res.json(result);
    } else {
        console.log("results not found")
        res.send(404);
    } 
})

module.exports = router;