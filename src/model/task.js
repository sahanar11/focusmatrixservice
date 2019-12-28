const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    id: {type: String, required: true, unique: true},
    description: {type: String, required: false},
    type: {type: String, required: false},
    group: {type: String, required: false},
    category: {type: String},
    priority: {type: Number},
    createdDate: {type: String},
    dueDate: {type: String},
    status: {type: String}
});

module.exports = mongoose.model('task', taskSchema, 'tasks');