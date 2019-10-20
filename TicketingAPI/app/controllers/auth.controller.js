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