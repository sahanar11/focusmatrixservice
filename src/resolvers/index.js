const task = require("../model");

const resolvers = {
    Query: {
        task: async (_, {filterKey,filterVal,parent, context}) => {
            let taskfound;
            if(filterKey == "taskId"){
                taskfound = await task.find({"taskId": filterVal});
            }else if(filterKey == "taskDesc"){
                taskfound = await task.find({"taskDesc": filterVal});
            }else if(filterKey == "isCompleted"){
                taskfound = await task.find({"isCompleted": filterVal});
            }else if(filterKey == "taskPriority"){
                taskfound = await task.find({"taskPriority": filterVal});
            }else if(filterKey == "taskCategory"){
                taskfound = await task.find({"taskCategory": filterVal});
            } else if(filterKey == "taskCreatedDate"){
                taskfound = await task.find({"taskCreatedDate": filterVal});
            }else if(filterKey == "taskDueDate"){
                taskfound = await task.find({"taskDueDate": filterVal});
            }
            return taskfound;
        },
      
        tasks: async (_, {sortKey, parent, context}) => {
            let tasks;
            if(sortKey == "taskId"){
                tasks = await task.find().sort({ taskId:1 });    
            }else if(sortKey == "taskDesc"){
                tasks = await task.find().sort({ taskDesc:1 });
            }else if(sortKey == "isCompleted"){
                tasks = await task.find().sort({ isCompleted:1 });
            }else if(sortKey == "taskPriority"){
                tasks = await task.find().sort({ taskPriority:1 });
            }else if(sortKey == "taskCategory"){
                tasks = await task.find().sort({ taskCategory:1 });
            }else if(sortKey == "taskCreatedDate"){
                tasks = await task.find().sort({ taskCreatedDate:1 });
            }else if(sortKey == "taskDueDate"){
                tasks = await task.find().sort({ taskDueDate:1 });
            }else{
                tasks = await task.find();
            }
            return tasks;
        }
    },
    Mutation: {
        create_task: async (_, { taskDesc,taskType,taskGroup, taskCategory,taskPriority,taskDueDate, isCompleted}) => {
            // const tasks = await task.find({taskId});
            // if (tasks && tasks.length > 0) {
            //     console.log('task already exists with this id - error!  ');
            //     return null;
            // }
           
            let taskCreatedDate = new Date().getTime();
            const p = new task({ taskDesc,taskType,taskGroup,taskCategory,taskPriority,taskCreatedDate,taskDueDate, isCompleted});
            p.taskId = p._id;
            const savedtask = await p.save();
            return savedtask.toObject();
        },
        update_task: async(_,{ taskId, taskDesc,taskCategory,taskPriority,taskCreatedDate,taskDueDate, isCompleted}) => {
           
            const tasks = await task.find({taskId});
            if(tasks && tasks.length > 0){
                let task = tasks[0];
                // task.taskDesc = taskDesc;
                // task.taskCategory = taskCategory;
                // task.taskPriority = taskPriority;
                // task.taskCreatedDate = taskCreatedDate;
                // task.taskDueDate = taskDueDate;
                task.isCompleted = isCompleted;
                const savedtask = await task.save();
                return savedtask.toObject();
            }
            else
            {
                console.log('task does not exists with this id - error!  ');
                return null; // TODO
            }

        },
    //     delete_task: async(_,{ taskId}) => {
    //         const tasks = await task.find({taskId});
    //         if(tasks && tasks.length > 0){
    //             const task = tasks[0];
    //             const deletedtask = await task.remove();
    //             return deletedtask.toObject();
    //         }else
    //         {
    //             console.log('task does not exists with this id - error!  ');
    //             return null; // TODO
    //         }
    //     }
    }
};

module.exports = resolvers;