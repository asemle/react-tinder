require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const cookieSession = require('cookie-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const checkForSession = require('./middlewares/checkForSession');

const mongoose = require('mongoose');
var firebase = require("firebase");

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    MONGODB_URI
} = process.env;


mongoose.connect(MONGODB_URI);
mongoose.connection.on('connected', function () {
    console.log('connected to database')

})


const profiles = require('./models/usersProfile.js');

const profilesCtrl = require('./controllers/profilesCtrl.js')



const app = express();
var port = SERVER_PORT || 3005;
const cardCtrl = require(__dirname + "/controllers/cardCtrl")
app.use(cors());
app.use(bodyParser.json());

app.use(cookieSession({
    secret: process.env.SECRET,
    keys: ['key1', 'key2']
}));


app.use(checkForSession);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    console.log("hi" + profile.id)
    profiles.findOne({ fbid: profile.id }).then(user => {
        if (!user) {
            console.log(profile)

            Profile {
                displayName: 'Andy Drew',
                    id: 'facebook|146693219488480',
                        user_id: 'facebook|146693219488480',
                            name: { familyName: 'Drew', givenName: 'Andy' },
                picture: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/27752532_102065837284552_151983587950281959_n.jpg?oh=4cba70ba90310c2fba282d1be1e8eef9&oe=5B4A9ADD',
                    locale: 'en-US',
                        nickname: 'Andy Drew',
                            gender: 'male',
                                _json:
                {
                    sub: 'facebook|146693219488480',
                        given_name: 'Andy',
                            family_name: 'Drew',
                                nickname: 'Andy Drew',
                                    name: 'Andy Drew',
                                        picture: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/27752532_102065837284552_151983587950281959_n.jpg?oh=4cba70ba90310c2fba282d1be1e8eef9&oe=5B4A9ADD',
                                            gender: 'male',
                                                locale: 'en-US',
                                                    updated_at: '2018-03-19T22:24:08.209Z'
                },
                _raw: '{"sub":"facebook|146693219488480","given_name":"Andy","family_name":"Drew","nickname":"Andy Drew","name":"Andy Drew","picture":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/27752532_102065837284552_151983587950281959_n.jpg?oh=4cba70ba90310c2fba282d1be1e8eef9&oe=5B4A9ADD","gender":"male","locale":"en-US","updated_at":"2018-03-19T22:24:08.209Z"}'
            }



            // var first = '';
            // var last = '';
            // if (profile.displayName.split(" ")[1]) {
            //     first = profile.displayName.split(" ")[0];
            //     last = profile.displayName.split(" ")[1];
            // }
            // db.create_user([first, last, "https://robohash.org/me", profile.id])
            //     .then(userCreated => {
            //         done(null, userCreated[0].id)
            //     })
        } else {
            done(null, users[0].id)
        }
    })
}))

passport.serializeUser((id, done) => {
    done(null, id);
})

passport.deserializeUser((id, done) => {
    profile.findById([profile.id]).then(user => {
        done(null, user[0]);
    })
})

app.get('/api/auth/login', passport.authenticate('auth0'))

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3005/#/',
    failureRedirect: 'http://localhost:3005/#/auth'
}))

app.get('/api/auth/authenticated', (req, res) => {
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(403).send('Nice try suckkaaaaaa!!!!')
    }
})

// app.get('/api/auth/logout', (req, res) => {
//     req.logOut();
//     res.redirect('http://localhost:3005/#/auth')
// })






console.log(__dirname)
app.use(express.static(`${__dirname}/../build`));

app.get('/api/users', profilesCtrl.getProfiles)
// app.get('/api/users', function(req,res) {
//     db.getall(function(err, res) {
//         res.status(400).send(res)
//     }).catch(err => console.log(err))
// })


app.get('/api/user/:id', profilesCtrl.getOne)

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
    console.log(path.join(__dirname, '../build/index.html'))
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(port, function () {
    console.log(`Server running on ${port}`);
});