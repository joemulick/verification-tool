const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Admin = mongoose.model('admins');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use( new JWTStrategy(opts, (jwt_payload, done) => {
        Admin.findById(jwt_payload.id)
        .then(admins => {
            if(admins){
                return done(null, admins);
            }
            return done(null, false);
        })
        .catch(err => console.log(err));
    }))
}