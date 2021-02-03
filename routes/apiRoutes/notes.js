const path = require("path");
const router = require("express").Router();
const { notesArray } = require("../../db/db.json");
const fs = require("fs");
const uuidv1 = require("uuidv1");

const createNewNote = function (body, notesArray) {
  const note = body;

  // creates unique id for note
  let noteID = uuidv1();
  note.id = noteID;

  // attaches information from note section to other note data
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
};

getNotesFunction = function() {
router.get("/notes", (req, res) => {
  let results = notesArray;
  res.json(results);
});
};

// post for api notes
router.post("/notes", (req, res) => {
  getNotesFunction()
  // req.body is where our incoming content will be
  const newNote = createNewNote(req.body, notesArray);
  res.json(newNote);
});

// // attempt to delete
// router.get("/notes/:id", (req, res) => {
//   res.json(notes[req.params.id]);
// });



router.delete('/notes/:id', (req, res) => {
  getNotesFunction();
  // console.log(notesArray)
   let notes = req.params.id;
  
  //  valueRemove(notes)

  let elementPos = notesArray.map(function(x) {return x.id; }).indexOf(notes);
  let objectFound = notesArray[elementPos];
  console.log(objectFound)
  console.log(elementPos)
console.log("breeeeeeaaaaaaakkk")
  //  let removeResult = notesArray.filter(valueRemove)
   console.log(notes)
// console.log(notesArray.indexOf(notes))

// var index = list.map(x => {
//   return x.Id;
// }).indexOf(notes);

  // let removeItem = notesArray.indexOf(notes)
  // console.log(removeItem)
  // let index = notesArray.filter(x => {
  //   return x.id != id;
  // })
//   let removeResult = notesArray.id.indexOf(notes);
//  console.log(removeResult)
  notesArray.splice(elementPos, 1);

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notesArray }, null, 2)
  );
  getNotesFunction();
})

getNotesFunction()
module.exports = router;
