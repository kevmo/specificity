var axios = require('axios');

// do this differently
var config = require('../config').production;

function indexHandler(req, res) {
    var url = 'https://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=' + config.sunlight_key;
    // console.log(process.env);
    axios.get(url)
        .then(function (response) {
            // console.log(response.data);
            console.log(response.data);
            res.render('index', {data: response.data})
        });
}

var handlers = {
    index: indexHandler
};


module.exports = {
    handlers: handlers
};