const router = require('express').Router();
const { response } = require('express');
const { notes } = require('../../db/db.json');
const createNewNote = require('../../lib/notes');


router.get('/api/notes', (req, res) => {

    let result = notes;
    console.log("notes", result)
    if (result) {
        res.json(result);
    } else {
        console.log("results not found")
        // res.sendStatus(404);
    } 
})


router.post('/api/notes', (req, res) => {

    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    console.log(note);
    res.json(note);
});

// router.delete('/api/notes/:id', (req, res) => {
    
//     const id = request.param.id;

//     const findNoteId = (notes, id) => {
//         for (let i = 0; i < notes.length; i++){
//             if(notes[i].id === parseInt(id)){
//                 return i;
//             }
//         }
//         return -1
//     }
//     fs.readFile('../../db/db.json', 'utf-8', (err, data) =>{
//         if (err){
//             return response.status(500).send('Sorry, something went worng.')
//         }
//         let note= JSON.parse(data);
//         const notesIndex = findNoteId(note, id)

//         if (notesIndex === -1) {
//             return response.status(404).send("Sorry, ID was not found");
//         }

//         note[notesIndex].complete = true;



//         fs.writeFile('../../db/db.json', JSON.stringify(note), () =>{
//             note.splice(notesIndex, id);
//             return response.json({'status': 'Deleted ID' + id})
//         })
//     })
//    });

module.exports = router;