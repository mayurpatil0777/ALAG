const Auth = require('../../Models/auth.model.js');


    exports.create = (req, res) => {


    // export function create(req, res)
    //  {
    // Validate request
    if (!req.body) {
        console.log("yessssss")
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const auth = new Auth({
        fName: req.body.fName,
        lName: req.body.lName,
        mailID: req.body.mailID,
        uName:  req.body.uName,
        pass:  req.body.pass,
        confPass:  req.body.confPass,
        loginDiv: req.body.loginDiv
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

// Retrieve and return all notes from the database.
exports.Login = (req, res) => {

/* // Create a Note
const login = new Auth({
    uName:  req.body.uName
}); */
    Auth.findOne({uName:req.params.uName}).then(notes => {
        if(!notes) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.uName
            });            
        }
        //res.send(notes);
    //    console.log("qqqqq",req.params.uName)
        res.send(notes);
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.LoginSingle = (req, res) => {
    Auth.findById(req.params.uName)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.uName
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.uName
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.uName
        });
    });
};