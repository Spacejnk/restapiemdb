const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-5qwpb.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'))
}

module.exports = connectDB;