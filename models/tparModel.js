const mongoose = require("mongoose");

const tparSchema = new mongoose.Schema({
    type: { type: String, required: true },
    ename: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
    link: { type: String },
   tname:{
    type:[String],
    
   }

});


const Tpar = mongoose.model("Tpar", tparSchema);

module.exports = Tpar;


