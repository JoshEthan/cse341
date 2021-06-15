const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
.use(express.static(__dirname + '/public'))
.use('/', require('./routes/route'))
.listen(PORT, () => {
    console.log("Listening on port 5000")
});