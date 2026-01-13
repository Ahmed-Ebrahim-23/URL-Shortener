const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MongoDB_Connection_String);
    } catch (err){
        console.error(err);
    }
};

module.exports = dbConnection;