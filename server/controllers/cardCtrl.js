var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyBiFCxJMkuGDQCBtpPipJlftpQuNPNcrGg",
    authDomain: "react-tinder.firebaseapp.com",
    databaseURL: "https://react-tinder.firebaseio.com",
    projectId: "react-tinder",
    storageBucket: "react-tinder.appspot.com",
    messagingSenderId: "709938968489"
};
firebase.initializeApp(config);


module.exports = {
    // create: (req, res) => {
    //     messages.push(
    //         {
    //             id: id,
    //             time: req.body.time,
    //             text: req.body.text
    //         })
    //     res.status(200).send(messages)
    //     id++;
    // },
    read: (req, res) => {
        
        firebase.database().ref('users/').once('value').then(function (snapshot) {
            var db = snapshot.val();
            console.log(db)
            res.status(200).send(db)
        }).catch((err) => res.status(500).send(console.log("fuck your mother")))
        // var db = firebase.database().ref('/users')
        //     let data = db;
        //     console.log(data)
        //     res.status(200).send("OK")
   
        
    }
    // update: (req, res) => {
    //     console.log("req params id is a " + typeof +req.params.id)

    //     var messageIndex = messages.findIndex((message) => message.id === +req.params.id)
    //     console.log(messageIndex)
    //     messages[messageIndex]['text'] = req.body.text;
    //     res.status(200).send(messages);
    // },
    // delete: (req, res) => {
    //     var index = messages.findIndex(message => message.id === req.params.id)
    //     messages.splice(index, 1);
    //     res.status(200).send(messages);
    // }
}