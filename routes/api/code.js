const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const passport = require('passport');
const keys = require('../../config/keys');
var bodyParser = require('body-parser');

// Load Code Validation
// const validateCodeInput = require('../../validation/codeVerify');

// Code model
const Code = require('../../models/Code');

router.get('/test', (req, res) => res.json({ msg: 'code route works' }));

// @route   GET api/verify/checkVerify
// @desc    Tests verify route
// @access  Public
router.post('/checkVerify', (req, res) => {
    // const { errors, isValid } = validateCodeInput(req.body);

      // Check Validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

    console.log("req.body: " + req.body.code);

    // const { errors, isValid } = validateCodeInput(req.body);

     // Check Validation
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

    const tempCode = req.body.code;
    console.log("Tempcode = " + tempCode)

    // Find code in database
    Code.findOne({code: tempCode})
        .then( code => {
            // Check for code in db
            if(!code) {
                errors.code = 'Code not valid'
                return res.status(404).json(errors);
            } 
            return 'Code Valid'
        })
        .catch(err => res.status(404).json(err));
});

// router.post('/code', (req, res) => {
//   const code = req.body.code;
//   // const company = req.body.password;

//   // Find code in database
//   Code.findOne({code})
//       .then( code => {
//           // Check for code in db
//           if(!code) {
//               return res.status(404).json({code: 'This code does not exist, please try again.'})
//           } 

//           return 'Code Valid'
//       })
// });

// @route   POST api/code
// @desc    Create code
// @access  Private (admin only)
// router.post(
//     '/',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//       const { errors, isValid } = validateCodeInput(req.body);
  
//       // Check Validation
//       if (!isValid) {
//         // If any errors, send 400 with errors object
//         return res.status(400).json(errors);
//       }
  
//       const newCode = new Cost({
//         code: req.body.code,
//       });
  
//       newCode.save().then(code => res.json(code));
//     }
//   );



module.exports = router;

