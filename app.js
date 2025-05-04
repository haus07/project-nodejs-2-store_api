//import express-async-error bat loi bang throw

require('dotenv').config();
//import express
const express = require('express');
const app = express();
//
const connectDB = require('./db/connect');
const PORT = process.env.PORT

//import router
const ProductRouter = require('./routes/productRoute.route');

//import PORT tu bien moi truong hoac goi mac dinh

//import middleware de dieu huong loi tu server(-500-) hoac khong tim thay(-404)
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handle');

//middleware de co the sung json 
app.use(express.json());

//global routes :: route nay mac dinh '/' se co link dieu huong sang trang hien thi
app.get('/', (req, res) => {
    res.send('<h1>Stotr API</h1><a href="/api/v1/products/">products route</a>');
})

// su dung route product
app.use('/api/v1/products', ProductRouter);

//su dung cac middleware ve loi server hoac ko tim thay
app.use(notFound);
app.use(errorHandlerMiddleware);

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

start();