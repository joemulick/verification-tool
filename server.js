const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Bring in verify from '/routes/api/users' file
const verify = require('./routes/api/verify');

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

app.get('/', (req, res) => res.send('Hello World'));

// Use Verify
app.use('/api/verify', verify);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));


