const Tpar = require("../models/tparModel");

const createTpar = async (req, res) => {
    const { type, ename,description, location, time, date,link } = req.body;
    const tpar = await Tpar.create({ type, ename,description, location, time, date,link });
    res.status(201).json(tpar);
};
const addTname = async (req, res) => {
    const { ename, tname } = req.body;
    const tpar = await Tpar.findOneAndUpdate({ ename }, { $push: { tname } });
    res.status(200).json(tpar);
};

const getT=async(req,res)=>{
    try {
        const t = await Tpar.find()
        res.status(200).json(t)
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
}
const getTpar = async (req, res) => {
    try {
        const tpar = await Tpar.find({}, { ename: 1, tname: 1 });

        
        const eventData = tpar.map((item) => ({
            ename: item.ename,
            tnames: item.tname,
            teamCount: item.tname.length
        }));

        res.status(200).json(eventData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
};



module.exports = { createTpar, addTname ,getTpar,getT};
