const router = require('express').Router();
const notesRoute = require('../apiRoutes/notes')

router.use(notesRoute)

module.exports = router;