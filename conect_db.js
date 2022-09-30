const mongoose = require("mongoose");
async function connectDB(){
    try{
        await mongoose.connect('mongodb://localhost/my_database');
        console.log("Success connect");
    }catch(error){
        console.log(error);
    }
}
module.exports =connectDB;