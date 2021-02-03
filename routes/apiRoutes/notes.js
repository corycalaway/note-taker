const path = require("path");
const router = require("express").Router();
const { notesArray } = require("../../db/db.json");
const fs = require("fs");
const uuidv1 = require("uuidv1");

const writeFileInfo = () => {

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notesArray }, null, 2)
  );

}

const createNewNote = function (body, notesArray) {
  const note = body;

  // creates unique id for note
  let noteID = uuidv1();
  note.id = noteID;

  // attaches information from note section to other note data
  notesArray.push(note);

  writeFileInfo();

  return note;
};

getNotesFunction = function () {
  router.get("/notes", (req, res) => {
    let results = notesArray;
    res.json(results);
  });
};

// post for api notes
router.post("/notes", (req, res) => {
  getNotesFunction();
  // req.body is where our incoming content will be
  const newNote = createNewNote(req.body, notesArray);
  res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
  getNotesFunction();
  let notes = req.params.id;

  let elementPos = notesArray
    .map(function (x) {
      return x.id;
    })
    .indexOf(notes);
  let objectFound = notesArray[elementPos];

 
  notesArray.splice(elementPos, 1);

  writeFileInfo();
  
  res.json(notesArray);
});

getNotesFunction();
module.exports = router;
