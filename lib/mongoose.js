var mongoose = require('mongoose'),
    log = require('lib/log')(module),
    conf = require('config');

var db = mongoose.connect(conf.get('mongoose:uri'));
mongoose.connection.on('error', function (msg) {

    log.error("DB connection error");
});

module.exports = mongoose;