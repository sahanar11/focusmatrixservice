const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {type: String, required: true, unique: true},
    name: {type: String, required: false},
    googleId: {type: String, required: false},
    email: {type: String, required: false}
});

module.exports = mongoose.model('user', userSchema, 'users');