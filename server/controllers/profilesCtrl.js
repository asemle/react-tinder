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
    },
    updateProfile: (req, res) => {
        console.log(req.params.id + "... " + req.body)
        
        profiles.update({id: req.params.id},{$set: {name:req.body.name, age:req.body.age, about: req.body.about, work: req.body.work, school:req.body.school, gender:req.body.gender, pictures:req.body.pictures}}, function(err, profile) {
            if(!err) {
                console.log(profile)
                res.send(profile)
            } else {
                console.log(err)
            }
        })


    }
}