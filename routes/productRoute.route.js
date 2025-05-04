//import Router 
const express = require('express');
const router = express.Router();

//import controller Product
const { getAllProduct, getOneProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController.controller');


//body cua route 
router.route('/').get(getAllProduct).post(createProduct);
router.route('/:id').get(getOneProduct).patch(updateProduct).delete(deleteProduct);

//export router
module.exports = router;