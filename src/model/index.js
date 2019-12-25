const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskId: {type: String, required: true, unique: true},
    taskDesc: {type: String, required: false},
    taskType: {type: String, required: false},
    taskGroup: {type: String, required: false},
    taskCategory: {type: String},
    taskPriority: {type: Number},
    taskCreatedDate: {type: String},
    taskDueDate: {type: String},
    isCompleted: {type: Boolean}
});

var task = mongoose.model('task', taskSchema);

module.exports = task;