var axios = require('axios');

// do this differently
var config = require('../config').production;

function indexHandler(req, res) {
    var url = 'https://congress.api.sunlightfoundation.com/legislators?apikey=' + config.sunlight_key;
    console.log(process.env);
    axios.get(url)
        .then(function (response) {
            // console.log(response.data);
            res.send("FUCK's UP")
        });
}

var handlers = {
    index: indexHandler
};


module.exports = {
    handlers: handlers
};