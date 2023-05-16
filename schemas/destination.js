const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const model = mongoose.model 

const destinationSchema = new Schema(
  {
     airport: {
               type: String,
               enum: ['AUS', 'DAL', 'LAX', 'SAN' & 'SEA']
     },
          arrival: {
               type: Date,
               default: Date()
          }
  }
);


const Destination = model("Destination", destinationSchema);

module.exports = Destination;