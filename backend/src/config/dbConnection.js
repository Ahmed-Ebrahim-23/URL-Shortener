const mongoose = require('mongoose');
const initCounter = require('../Utils/initCounter');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MongoDB_Connection_String);
        initCounter();
    } catch (err){
        console.error(err);
    }
};

module.exports = dbConnection;