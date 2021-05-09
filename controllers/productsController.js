const Product = require('../models/productsModel')
const https = require("https");


exports.getAddProduct = (req, res, next) => {
    res.render('pages/user/add-product', {
        title: 'Add Product',
        path: '/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/shopRoutes/browser-products');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        console.log(products);
        res.render('pages/shop/products-list', {
            title: 'Shop',
            products: products,
            path: '/shop'
        });
    });
};

exports.getbrowseProducts = (req, res) => {
    // read json
    var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

    https.get(url, function(response) {
        var body = '';

        response.on('data', function(chunk) {
            body += chunk;
        });

        response.on('end', function() {
            var jsonResponse = JSON.parse(body);
            var stuff = {
                data:jsonResponse, 
                path: '/browser-products', 
                title: 'Browsing Products'}

            res.render('pages/shop/browser', stuff
            );
        });
    }).on('error', function(e) {
        console.log("Got an error: ", e);
    });
};