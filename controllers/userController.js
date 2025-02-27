const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jtwkey = process.env.JWT_KEY;
const Register = async (req, res) => {
    const { name, email, password } = req.body;
    const token = jwt.sign({ name, email, password }, `${jtwkey}`);

    if(!name || !email || !password){
        return res.status(400).json({ message: "All fields are required" });
    }
    const u = await User.findOne({ email });
    if(u){
        return res.status(400).json({ message: "User with this email already exists" });
    }
    const user = await User.create({ name, email, password ,token});
    res.status(201).json(user);
};

const Login = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await User.findOne({ email, password });
    
    if(!user){
        return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json(user);
};
const getUser = async (req, res) => {
    const{email} = req.body;
    if(!email){
        return res.status(400).json({ message: "Email is required" });
    }
    const user = await User.findOne({ email });
    res.status(200).json(user);
};
module.exports = { Register, Login, getUser };

