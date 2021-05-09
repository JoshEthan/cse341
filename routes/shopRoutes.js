const express = require('express');
const productsController = require('../controllers/productsController'); 

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

router.get('/shop', productsController.getProducts); 

router.get('/browser-products', productsController.getbrowseProducts); 

module.exports = router;