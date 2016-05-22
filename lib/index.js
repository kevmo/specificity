function indexHandler(req, res) {
    res.send("HAY")
}

var handlers = {
    index: indexHandler
};


module.exports = {
    handlers: handlers
};