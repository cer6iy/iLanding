/*
 ** User's and associated models
 */

var mongoose = require('lib/mongoose');

Schema = mongoose.Schema;

/* ======= Schemas ======= */

var Subscription = new Schema({
    mail: {
        required: true,
        unique: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    }
})

module.exports.Subscription = mongoose.model('Subscription', Subscription);