const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// import routes 
const postRoute = require('./routes/post');

// use this post route midd/ware
app.use(cors());
app.use('/post', postRoute);

// routes
app.get('/', (req, res) => {
    res.send('Get test');
})

// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'))

app.listen(3000);