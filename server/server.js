require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const cookieSession = require('cookie-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const checkForSession = require('./middlewares/checkForSession');

const mongoose = require('mongoose');


const {
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
var port = process.env.PORT || 3005;

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
    scope: 'openid profile user_birthday location'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    console.log("hi" + profile.id)
    profiles.findOne({ id: profile.id }, function(err, user) {
        if (!user) {
            profiles.collection.insert({
                name: profile.name.givenName,
                gender: profile.gender,
                location: {},
                pictures: [profile.picture],
                job: '',
                school: '',
                about: '',
                likes: [],
                dislikes: [],
                matches: [],
                settings: {},
                id: profile.id
            }, function(err, res) {
                if(err) {
                    cosole.log(err)
                }
                else {
                    done(null, res.ops[0].id)
                }
            })
        } else if(user){
            done(null, user.id)
        }
        else {
            console.log(err)
        }
    }).catch(err => {console.log(err)})
}))

passport.serializeUser((id, done) => {
    done(null, id);
})

passport.deserializeUser((id, done) => {
    profiles.findOne({ id: id }).then(user => {
        done(null, user);
    })
    
})

app.get('/api/auth/login', passport.authenticate('auth0'))

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.LOGIN,
    failureRedirect: process.env.LOGIN + 'login'
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

app.put('/api/matches', profilesCtrl.getMatches)


app.post('/api/user/:id', profilesCtrl.updateProfile)

app.post('/api/user/swipes/:id', profilesCtrl.updateSwipes)

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