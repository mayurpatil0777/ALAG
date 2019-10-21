module.exports = {
    url: 'mongodb://localhost:27017/TKT'
// url: "mongodb+srv://alag:alag123@alag-hwkyu.mongodb.net/TKT?retryWrites=true&w=majority"
}

/* const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://alag:<password>@alag-hwkyu.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */