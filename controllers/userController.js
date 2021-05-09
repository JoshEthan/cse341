const userMap = new Map();

exports.addUser = (req, res, next) => {
    const newEmail = req.body.email;
    const newPsw = req.body.psw;
    userMap[newEmail] = newPsw;
    // console.log(newUser);
    // console.log(newEmail);
    // console.log(newPsw);
    // console.log(userMap);
    res.redirect('/')
};
// Maybe send user to login page after??

exports.signUp = (req, res, next) => {
    res.render('pages/user/sign-up', { 
        title: 'Create a new user',
        path: '/userRoutes'
    });
};
