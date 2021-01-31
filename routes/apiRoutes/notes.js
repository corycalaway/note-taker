const path = require('path');
const router = require('express').Router();
const { dbInfo } = require('../../db/db.json')

// router.get('/notes', (req, res) => {
//     dbInfo.getNotes().then((notes) => {
//         return res.json(notes)
//     })
//     // res.sendFile(path.join(__dirname, dbInfo));
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

router.get('/notes', (req, res) => {
    let results = dbInfo;
    res.json(results);
  });

  


  module.exports = router;
