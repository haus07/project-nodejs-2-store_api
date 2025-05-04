//dung de connert db voi mongoose

//import mongoose
const mongoose = require('mongoose');
const connectDB = async (url)=> {
    try {
        await mongoose.connect(url);
    } catch (error)
    {
        console.log(error);
    }
}

module.exports = connectDB;