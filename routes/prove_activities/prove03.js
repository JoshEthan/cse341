// Error Handling: Add 500 page
// Validation Implementation: email sign-up and password reset
// Professional: CSS stuff
// Client-Server Communication: MVC Pattern
// MongoDB: Use CRUD operations
const express = require('express');
const productsController = require('../../controllers/prove_activities/prove03/products'); 

const router = express.Router();


router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

router.get('/show_books', productsController.getProducts);

module.exports = router;