const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./DataBase/Databaseconnect');
const cors = require('cors');
require('dotenv/config');


// midware
app.use('post', bodyParser.json());
app.use(bodyParser.json());
app.use(cors());

// import routes 
const postRoute = require('./routes/post');
app.use('/post', postRoute);


// app.get('/', (req, res) => {
//     res.send('Get test');
// })

connectDB();
const Port = process.env.Port || 3000;
app.listen(Port, () => console.log('Server Started'));