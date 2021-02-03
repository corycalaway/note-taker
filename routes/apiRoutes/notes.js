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

router.get("/notes", (req, res) => {
  let results = notesArray;
  res.json(results);
});

// post for api notes
router.post("/notes", (req, res) => {
  // req.body is where our incoming content will be
  const newNote = createNewNote(req.body, notesArray);
  res.json(newNote);
});

// attempt to delete
router.get("/api/notes/:id", (req, res) => {
  res.json(notes[req.params.id]);
});

module.exports = router;
