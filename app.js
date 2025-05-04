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
const JWTRouter = require('./routes/jwtRoute.route');


//import PORT tu bien moi truong hoac goi mac dinh

//import middleware de dieu huong loi tu server(-500-) hoac khong tim thay(-404)
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handle');

//middleware de co the sung json 
app.use(express.static('./public'));
app.use(express.json());


// su dung route product
app.use('/api/v1/products', ProductRouter);
app.use('/api/v1', JWTRouter);

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