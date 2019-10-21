module.exports = (app) => {
    const notes = require('../controllers/auth.controller.js');

    // Create a new Note
    app.post('/register',  notes.create);

    // Retrieve all Notes
     app.get('/login/:uName', notes.Login);

    // // Retrieve a single Note with noteId
    app.get('/users/:uName', notes.LoginSingle);

    // // Update a Note with noteId

    // app.put('/notes/:noteId', notes.update);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}