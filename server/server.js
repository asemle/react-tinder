const express = require('express');
const bodyParser = require('body-parser');
var firebase = require("firebase");
const app = express();
const cardCtrl = require(__dirname + "/controllers/cardCtrl")

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/public'));


const port = 3000



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

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})