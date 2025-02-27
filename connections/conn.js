const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URL;

const conn = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
};

module.exports = conn;
