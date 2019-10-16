import Auth from '../Models/auth.model.js.js';

export function create(req, res) {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const auth = new Auth({
        title: req.body.title || "Untitled Note", 
        content: req.body.content
    });

    // Save Note in the database
    auth.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}