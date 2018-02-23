const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var firebase = require("firebase");
const app = express();
var port = process.env.PORT || 5000;
const cardCtrl = require(__dirname + "/controllers/cardCtrl")
app.use(cors());
app.use(bodyParser.json());


app.use(express.static(`${__dirname}/../build`));

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
const path = require('path')
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(port, function () {
    console.log(`Server running on ${port}`);
});