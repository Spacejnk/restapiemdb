const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());
// import routes 
const postRoute = require('./routes/post');

// use this post route midd/ware
app.use('/post', postRoute);



// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'))

app.listen(3000);