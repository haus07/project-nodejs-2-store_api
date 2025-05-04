require('dotenv').config();
const connectDB = require('./db/connect');
const PORT = process.env.PORT
const express = require('express');
const app = express();

// ket noi cong vs server
const start = async () => {
    try {
        await connectDB(process.env.URI);
        console.log('Connected Database');
        app.listen(PORT, console.log(`Server listening on PORT ${PORT}`));
        // await Product.deleteMany();
        // await Product.create(jsonProducts);
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = start;