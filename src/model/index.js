const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskId: {type: Number, required: true, unique: true},
    taskDesc: {type: String, required: true},
    taskCategory: {type: String},
    priority: {type: Number},
    taskCreatedDate: {type: String},
    taskDueDate: {type: String},
    isCompleted: {type: Boolean}
});

var Task = mongoose.model('Task', taskSchema, 'tasks');

module.exports = Task;