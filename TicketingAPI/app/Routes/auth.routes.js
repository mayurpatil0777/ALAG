module.exports = (app) => {
    const notes = require('../controllers/auth.controller.js');

    // Create a new Note
    app.post('/register',  notes.create);

    // Retrieve all Notes
    // app.get('/notes', notes.findAll);

    // // Retrieve a single Note with noteId
   // app.get('/notes/:noteId', notes.findOne);

    // // Update a Note with noteId

    // app.put('/notes/:noteId', notes.update);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}