const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var firebase = require("firebase");
const app = express();
var port = process.env.PORT || 8080;
const cardCtrl = require(__dirname + "/controllers/cardCtrl")
app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));
} else {
    app.use(express.static('./../public/'));
}



app.get('/api/users/:id', cardCtrl.read)

// function writeUserData(x) {
//     x.forEach(user => {
//         firebase.database().ref('users/' + user.id).set({
//             id: user.id,
//             name: user.name,
//             age: user.age,
//             gender: user.gender,
//             location: user.location,
//             pictures: user.pictures,
//             job: user.job,
//             school: user.school,
//             about: user.about
//         });
//     });

// }
// writeUserData(data)

app.listen(port, function () {
    console.log(`Server running on ${port}`);
});