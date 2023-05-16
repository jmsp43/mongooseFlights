const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const model = mongoose.model 

const destinationSchema = require('./destination')

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
          inAirNow: Boolean,
          airport: {
               type: String,
               enum: ['AUS', 'DAL', 'LAX', 'SAN' & 'SEA']
     },
          // destinations: {
          //      type: [destinationSchema],
          // }
          //Invalid schema configuration: `model` is not a valid type within the array `destinations`
  }
);


const Flight = model("Flight", flightSchema);

module.exports = Flight;