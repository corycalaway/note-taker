const path = require('path');
const router = require('express').Router();
const { notesArray } = require('../../db/db.json')
const fs = require('fs');
const uuidv1 = require('uuidv1');

// router.get('/notes', (req, res) => {
//     notesArray.getNotes().then((notes) => {
//         return res.json(notes)
//     })
//     // res.sendFile(path.join(__dirname, notesArray));
// });

// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/index.html'));
// });
// router.post('/notes', (req, res) => {

//     req.body.id = notes.length.toString();
//     const notes = createNewNote(req.body,notes);
//     res.json(notes)
// }
// )

// router.get('/notes', (req, res) => {
//     // res.sendFile(path.join(__dirname, '../../db/db.json''));
//     res.json('../../db/db.json')

// });
const createNewNote = function (body, notesArray) {

  const note = body;

  // creates unique id for note
  let noteID = uuidv1();
  note.id = noteID;

  // attaches information from note section to other note data
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  // fs.writeFileSync(
  //   path.join(__dirname, './db/db.json'),
  //   JSON.stringify({ results }, null, 2)
  // );
  return note;

} 

router.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
  });

// post for api notes
router.post('/notes', (req, res) => {
  // req.body is where our incoming content will be
  const newNote = createNewNote(req.body, notesArray);




  // let notes = JSON.parse(fs.readFileSync('./db/db.json'))
  
  


  // console.log(notes)
  // createNewNote(req.body)
  // notesArray.push(newNote)

  // req.body.id = notes.length.toString();

  // fs.writeFileSync('./db/db.json', JSON.stringify(notesArray));
  res.json(newNote);
});
  
// attempt to delete
router.get('/notes/:id', (req,res) => {

  res.json(notes[req.params.id]);
});

  module.exports = router;
