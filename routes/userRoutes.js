const express = require('express');
const userController = require('../controllers/userController'); 

const router = express.Router();

router.post('/addUser', userController.addUser);

router.get('/', userController.signUp);

// REMOVE USER
// router.post('/removeUser', (req, res, next) => {
//     const remUser = req.body.remUser;

//     // Splice method removes from a const array
//     const index = userArray.indexOf(remUser);
//     if (index !== -1 ) {
//         userArray.splice(index, 1);
//     }

//     res.redirect('/ta02/');
// });

// GET USER LIST
// router.get('/getUsers', userController.getUsers);


module.exports = router;
