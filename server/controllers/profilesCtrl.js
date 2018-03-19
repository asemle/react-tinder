var profiles = require('../models/usersProfile.js');

module.exports = {
    addProfiles: function(arr) {
   profiles.collection.insert(arr)
    },
    getProfiles: function (req, res) {
        profiles.find({}, function (err, profiles) {
            if (!err) {
                res.send(profiles);
            }
            else {
                console.log(err)
            }
        });
    },
    getOne: (req, res) => {
        console.log(req.params.id)
        profiles.findOne({_id: req.params.id}, function(err, profile) {
            if (!err) {
                res.send(profile);
            }
            else {
                console.log(err)
            }
        }
        );
    }
}