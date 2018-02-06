const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user.id); //id from Mongo record, not googleID
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user); 
    }); 
});

const User = mongoose.model('users');
passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleSecretID,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({
            googleID: profile.id
        }).then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);
            } else {
                new User({
                    googleID: profile.id,
                    name: profile.displayName
                }).save().then((user => done(null, user)));
            }
        });
    }
));
