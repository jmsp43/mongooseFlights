const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const model = mongoose.model 

const flightSchema = new Schema(
  {
          num: {
            type: Number,
            min: 10,
            max: 99999
    } ,
     model: { company: String, make: Number },
     airline: {
               type: String,
               enum: ['American', 'United', 'Southwest']
     },
          departs: {
               type: Date,
               default: Date()
          },
    pilot: { first: String, last: String },
    inAirNow: Boolean
  }
);


const Flight = model("Flight", flightSchema);

module.exports = Flight;