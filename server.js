const express = require("express");
const app = express();
const conn = require("./connections/conn");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const tparRoutes = require("./routes/tparRoutes");

app.use(express.json());
require("dotenv").config();

const corsOptions = {
    origin: "http://localhost:5173", 
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], 
};//
app.use(cors(corsOptions));
app.use("/user", userRoutes);
app.use("/tpar", tparRoutes);

conn();


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
