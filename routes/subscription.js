var Subscription = require('models/subscription').Subscription,
    validator = require('validator');

var subscribe = function (req, res) {
    var mail = req.body.mail;
    console.log(mail);
    if (mail && validator.isEmail(mail)) {
        // TODO: validation
        Subscription.findOne({mail: mail}, function (err, sub) {
            if (!err && !sub) {
                // subscription with this mail is not exist
                newSub = new Subscription({mail: mail});
                newSub.save(function (err, s, affected) {
                    if (!err) {
                        res.send({status: 201});
                    } else {
                        res.send({status: 500});
                    }
                })
            } else {
                res.send({status: 302});
            }
        })
    } else {
        res.send({status: 400});
    }
}

module.exports.Subscribe = subscribe;