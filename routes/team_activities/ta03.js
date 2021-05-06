const https = require("https");

function processJson(req, res) {

    // read json
    var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

    https.get(url, function(response) {
        var body = '';

        response.on('data', function(chunk) {
            body += chunk;
        });

        response.on('end', function() {
            var jsonResponse = JSON.parse(body);
            var stuff = {data:jsonResponse, path: '/ta03', title: 'Team Activity 03'}

            res.render('pages/team_activities/ta03', stuff
            );
        });
    }).on('error', function(e) {
        console.log("Got an error: ", e);
    });
}

module.exports = {processJson: processJson};