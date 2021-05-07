const Product = require('../../../models/products')

exports.getAddProduct = (req, res, next) => {
    res.render('pages/prove_activities/prove03/add_book', {
        title: 'Add Product',
        path: '/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('pages/prove_activities/prove03/show_books', {
        title: 'Shop',
        products: products,
        path: '/'
    });
};