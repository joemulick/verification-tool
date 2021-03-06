const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


// Bring in verify from '/routes/api/users' file
const code = require('./routes/api/code');
const adminLogin = require('./routes/api/adminLogin');

// Initial express app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Contect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/adminLogin', adminLogin);
app.use('/api/code', code);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));