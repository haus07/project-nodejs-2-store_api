//controller de viet ham xu li

//import model de lay lay mongoose xu li de hon
const Product = require('../models/product.model');

//import errorHandle da han che su dung try/catch
const asyncErrorHandler = require('../utils/asyncErrorHandler')

//lay du lieu tat ca product
const getAllProduct = asyncErrorHandler(async(req, res) => {
    const allProduct = await Product.find({});
    res.status(200).json(allProduct);
})

//lay du lieu 1 product
const getOneProduct =asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
        const oneProduct = await Product.findById(id);
        res.status(200).json(oneProduct);
})


//tao 1 product
const createProduct = asyncErrorHandler(async(req, res) => {
    const product = await Product.create(req.body);
    res.status(200).send("Successfully");
})


const updateProduct = asyncErrorHandler(async(req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
})


const deleteProduct = asyncErrorHandler(async (req, res) => {
    const id = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.status(200).send("Successfully");
})

module.exports = { getAllProduct, getOneProduct, createProduct, updateProduct, deleteProduct };