const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let connection = mongoose.connect('mongodb://127.0.0.1:27017/QuizAHAv3', { useMongoClient: true })
    .then((data) => {  })
    .catch(err => console.error(err));

module.exports = connection;
