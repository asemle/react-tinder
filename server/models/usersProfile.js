var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var profilesProfile = new Schema({
    _id: ObjectId,
    name: String,
    gender: String,
    location: Object,
    pictures: Array,
    job: String,
    school: String,
    about: String,
    likes: Array,
    dislikes: Array,
    matches: Array,
    settings: Object,
    id: String
});


module.exports = mongoose.model('profiles', profilesProfile);




