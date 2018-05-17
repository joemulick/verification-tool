const express = require('express');
const router = express.Router();
// Unsure If I need bcrypt (im thinking not)
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const ValidateLoginInput = require('../../validation/login');

// Load Verify model
const Admin = require('../../models/Admin');


// @route   GET api/users/test
// @desc    Tests adminLogin route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'adminLogin Works' }));


// @route GET api/admin/login
// @desc Admin / Returning JWT Token
// @access Public
router.post('/login', (req, res) => {

    const { errors, isValid } = ValidateCodeInput(req.body);

    //Check Validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find the user by email
    Admin.findOne({email: email})
    .then(user => {
        //Check for user
        if(!user) {
            errors.email = 'User not found';
            return res.status(404).json(errors)
        }

        //Check password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(isMatch){
                   // User Matched
                    const payload = { id: user.id, name: user.name } // Create JWT Payload
                   // Sign Token
                   jwt.sign( payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                       res.json({
                           sucess: true,
                           token: 'Bearer ' + token
                       })
                   } )
                } else {
                    errors.password = 'Password incorrect';
                    return res.status(400).json(errors);
                }
            })
    });
});

// @route GET api/users/current
// @desc Return current user
// @access Private
router.get(
    '/current',
    passport.authenticate('jwt', {session: false}),
    (req,res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
    }
);


module.exports = router;