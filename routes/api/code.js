const express = require('express');
const router = express.Router();

// Code model
const Code = require('../../models/Code');

// Profile model
const Admin = require('../../models/Admin');

// Load Input Validation
const ValidateCodeInput = require('../../validation/codeVerify');

// @route GET api/verify/code
// @desc Check for Code in DB
// @access Public
// router.post('/codeVerify', (req, res) => {

//     const { errors, isValid } = ValidateCodeInput(req.body);

//     //Check Validation
//     if(!isValid) {
//         return res.status(400).json(errors);
//     }

//     const code = req.body.code;

//     // Find the code in the db
//     User.findOne({code})
//     .then(code => {
//         //Check for code
//         if(!code) {
//             errors.code = 'Sorry that is not a valid code';
//             return res.status(404).json(errors)
//         }

//     });
// });

// @route   GET api/verify/checkVerify
// @desc    Tests verify route
// @access  Public
// router.post('/checkVerify', (req, res) => {
//     const code = req.body.code;
//     // const company = req.body.password;

//     // Find code in database
//     Verify.findOne({code})
//         .then( verify => {
//             // Check for code in db
//             if(!code) {
//                 return res.status(404).json({code: 'This code does not exist, please try again.'})
//             } 

//             return 'Code Valid'
//         })
// });

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateCodeInput(req.body);
  
      // Check Validation
      if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
      }
  
      const newCode = new Cost({
        code: req.body.code,
      });
  
      newCode.save().then(code => res.json(code));
    }
  );



module.exports = router;

