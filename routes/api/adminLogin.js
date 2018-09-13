const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateLoginInput = require('../../validation/login');

// Load Admin model
const Admin = require('../../models/Admin');

// @route   GET api/adminLogin/test
// @desc    Tests adminLogin route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'adminLogin Works' }));


// @route   GET api/adminLogin/login
// @desc    Login admins / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find admins by email
  Admin.findOne({ email }).then(admin => {
    // Check for admins
    if (!admin) {
      errors.email = 'Admin not found';
      return res.status(404).json(errors);
    }

    // Check Password
    Admin.findOne({ password }).then(admin => {

      if (admin) {
        // admin Matched
        const payload = { id: admin.id, name: admin.name, email: admin.email, userRights: admin.userRights }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/adminLogin/current
// @desc    Return current admin
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.admin.id,
      name: req.admin.name,
      email: req.admin.email,
      userRights: req.admin.userRights
    });
  }
);

module.exports = router;