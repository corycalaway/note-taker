const util = require('util');
const uuidv1 = require('uuid/v1');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

const writeFile = util.promisify(fs.writeFile);

class Creation {
    constructor() {
        
    }
    

    // reading infromation from the db.json file
    readRoute() {
        return readFile ('db/db.json', 'utf8')
    }
    writeRoute(note) {
        return writeFile ('db/db.json', JSON.stringify(note));
    }

    //todo write a get notes function using the readroute  to get information from the json
    getNotes() {
        return this.readRoute().then((notes) => {
            let returnedNotes = [JSON.parse(notes)]
           return returnedNotes;
        })
    }

    addNotes() {
        //make sure there is a title or something to test
        // use the uuidv1 to set an id
    }
    // in the addNotes () using the write the will add a note to the json
};

module.exports = Creation;
