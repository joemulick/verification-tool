const express = require('express');
const router = express.Router();

const Verify = require('../../models/Verify');

// @route   GET api/posts/test
// @desc    Tests verify route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "User Works"
}));

// @route   GET api/verify/checkVerify (this rouge would owrk to create a new model of verify in the DB(we are using the DB UI not using a post route with express))
// @desc    Tests verify route
// @access  Public
// router.post('/checkVerify', (req, res) => {
//     Verify.findOne({ code: req.body.code })
//     .then(verify =>  {
//         if(verify){
//             return res.status(400).json({code: "This code does not exist, please try again."});
//         } else {
//             const newVerify = new Verify({
//                 code: req.body.code,
//                 company: req.body.company
//             })
//         }
//     })
// })

// @route   GET api/verify/checkVerify
// @desc    Tests verify route
// @access  Public
router.post('/checkVerify', (req, res) => {
    const code = req.body.code;
    const company = req.body.password;

    // Find code in database
    Verify.findOne({code})
        .then( verify => {
            // Check for code in db
            if(!code) {
                return res.status(404).json({code: 'This code does not exist, please try again.'})
            } 

            // Check
        })
});

module.exports = router;

