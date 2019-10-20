const dbConfig = require('./database.config.js');
const mongoose = require('mongoose');
var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

mongoose.Promise = global.Promise;

//   app.options('*', cors(corsOptions))
/* var whitelist = ['http://localhost:3000']
var corsOptions = {

  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
} */
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors());
require('./app/Routes/auth.routes.js')(app);
// // define a simple route
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });

// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});