const express = require('express');
const router = express.Router();

const userArray = ['Jack', 'Jill', 'Brian'];

router.post('/addUser', (req, res, next) => {
    const newUser = req.body.newUser;
    userArray.push(newUser);
    console.log(userArray)
    res.redirect('/prove01/');
});

router.get('/',(req, res, next) => {
    res.render('pages/prove_activities/prove01/prove01', { 
        title: 'Prove Activity 01',
        users: userArray,
        path: '/prove01' // For pug, EJS
    });
});

module.exports = router;
