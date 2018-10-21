const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const passport = require('passport');
const keys = require('../../config/keys');

//Load Code Validation
const validateCodeInput = require('../../validation/codeVerify');
// Code model
const Code = require('../../models/Code');

// router.get('/test', (req, res) => res.json({ msg: 'code route works' }));

// @route   GET api/verify/checkVerify
// @desc    Tests verify route
// @access  Public

router.post('/checkVerify', (req, res) => {

    console.log("req.body: " + req.body.code);
    const tempCode = req.body.code;
    console.log("Tempcode = " + tempCode);

    // const {errors, isValid} = validateCodeInput(req.body.code);

    // if (!isValid) {
    //     return res.status(404).json(errors.code);
    // }


    // Find code in database
    Code.findOne({tempCode}).then(code => {

            // Check for code in db
            if(!code) {
                errors.code = 'Code Is Not Valid';
                return res.status(404).json(errors);
                // return 'Code is not Valid'
            } else {
                errors.code = 'Code Valid';
                return res.status(404).json(errors);
                // return 'Code is Valid'
            }

    })

        
});

module.exports = router;