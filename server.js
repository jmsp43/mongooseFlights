const express = require("express");
const Flight = require('./schemas/flight.js')
const mongoose = require("mongoose");
const flights = require("./models/flights.js");
require("dotenv").config();

const app = express();
const port = 3000;

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());


Flight.insertMany(flights)
// if database transaction succeeds
.then((flights) => {
  console.log(flights)
})
// if database transaction fails
.catch((error) => {
  console.log(error)
})
// close db connection either way
// .finally(() => {
//  db.close()
// })



app.get("/", (req, res) => {
  res.send("Every little thing is gonna be alright");
});

app.get(('/flights'), (req,res) => {
     res.render('Index', { flights: flights })
 })
 
 app.get(('/flight/:id'), (req,res) => {
     res.render('Show', {flights : flights[req.params.id]})
 })

app.listen(port, () => {
  console.log(`Don't worry, be happy`);
});
