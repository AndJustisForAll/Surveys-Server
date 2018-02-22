const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

var User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id); //id from Mongo record, not googleID
});

passport.deserializeUser(async(id, done) => {
    const user = await User.findById(id);
    console.log(`User deserialized: ${user}`);
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleSecretID,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async(accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({
            googleID: profile.id
        });
        if (existingUser) {
            console.log(`User exists: ${existingUser}`);
            done(null, existingUser);
        } else {
            const newUser = await new User({
                googleID: profile.id,
                name: profile.displayName
            }).save();
            console.log(`New User : ${newUser}`);
            done(null, newUser);
        }
    }
));
