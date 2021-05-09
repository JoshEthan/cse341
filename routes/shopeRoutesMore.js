const express = require('express');
const router = express.Router();

const books = [];

router.get('/add_book', (req, res, next) => {
    res.render('pages/prove_activities/prove02/add_book', { 
        title: 'Prove Activity 02',
    });
});

router.get('/show_books', (req, res, next) => {
    res.render('pages/prove_activities/prove02/show_books', {
        title: 'Prove Activity 02',
        books: books});
});

router.post('/add-book', (req, res, next) => {
    books.push({name: req.body.book_title});
    books.push({author: req.body.book_author});
    books.push({summary: req.body.book_summary});
    res.redirect('/prove02/add_book');
});

module.exports = router;