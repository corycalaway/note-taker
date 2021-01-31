const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)



//

// function createNewNote(body, notesArray) {
//     console.log(body);
//     const notes = body;
//     notesArray.push(notes)

//     // false.writeFileSync(
//     //     path.join(__dirname, './db/db.json'),
//     //     JSON.stringify({notesArray}, null, 2)
//     // )
//     // our function's main code will go here!
  
//     // return finished code to post route for response
//     return notes;
//   }

// post for api notes
app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be
    const newNote = req.body

    let notes = JSON.parse(fs.readFileSync('./db/db.json'))
    
    console.log(notes)
    // createNewNote(req.body)
    notes.push(newNote)

    // req.body.id = notes.length.toString();

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
     res.json(notes);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

//fs.writeFileySync('db/db.json', JSON.stringify(notes));

// create routes for api and html
// const newNote = req.body;
// notes.push(newNote)
// fs.writeFileSync('db.db.json', JSON.stringify(notes));
// res.json(notes;)
