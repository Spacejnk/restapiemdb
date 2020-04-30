const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');





// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true } , () => console.log('connected to DB!'))

app.listen(3000);