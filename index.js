/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

// Route setup.
const userRoutes = require('./routes/userRoutes');
const shopRoutes = require('./routes/shopRoutes'); 
// const ta04Routes = require('./routes/ta04'); 
// const prove01Routes = require('./routes/prove01'); 
// const prove02Routes = require('./routes/prove02'); 
// const prove03Routes = require('./routes/prove03');
const errorController = require('./controllers/errorController'); 


app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .use(bodyParser({extended: false})) // For parsing the body of a POST
   .use('/userRoutes', userRoutes) 
   .use('/shopRoutes', shopRoutes) 
   // .get('/ta03', ta03Routes.processJson) 
   // .use('/ta04', ta04Routes)
   // .use('/prove01', prove01Routes)
   // .use('/prove02', prove02Routes)
   // .use('/prove03', prove03Routes)
   .get('/', (req, res, next) => {
      // This is the primary index, always handled last. 
      res.render('pages/index', {
        title: 'Welcome to BYU-I Surplus Store!',
        path: '/'});
    })
   .use(errorController.get404)
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));
