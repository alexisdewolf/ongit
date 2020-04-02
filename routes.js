// Get an instance of the express Router and set routes
let express = require('express');
let router = express.Router();              

// Import contact controller
var notesController = require('./controllers/notesController');


router.get('/notes', notesController.noteslist);
router.get('/', notesController.noteslist);
router.get('/notes/add', notesController.notesFormAdd);
router.post('/notes/new', notesController.notesNew);
router.get('/notes/update/:idNotes', notesController.notesFormUpdate);
router.get('/notes/delete/:idNotes', notesController.notesRemove);

module.exports = router;