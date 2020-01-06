const task = require("../model/task");
const User = require('../model/user');

const resolvers = {
    Query: {
        user: async(_,{id}) =>{
            let userfound =  await User.find({"id": id});
            return userfound;
        },


        task: async (_, {filterKey,filterVal,parent, context}) => {
            let taskfound;
            if(filterKey == "id"){
                taskfound = await task.find({"id": filterVal});
            }else if(filterKey == "description"){
                taskfound = await task.find({"description": filterVal});
            }else if(filterKey == "status"){
                taskfound = await task.find({"status": filterVal});
            }else if(filterKey == "priority"){
                taskfound = await task.find({"priority": filterVal});
            }else if(filterKey == "category"){
                taskfound = await task.find({"category": filterVal});
            } else if(filterKey == "createdDate"){
                taskfound = await task.find({"createdDate": filterVal});
            }else if(filterKey == "dueDate"){
                taskfound = await task.find({"dueDate": filterVal});
            }
            return taskfound;
        },
      
        tasks: async (_, {sortKey, parent, context}) => {
            let tasks;
            if(sortKey == "id"){
                tasks = await task.find().sort({ id:1 });    
            }else if(sortKey == "description"){
                tasks = await task.find().sort({ description:1 });
            }else if(sortKey == "status"){
                tasks = await task.find().sort({ status:1 });
            }else if(sortKey == "priority"){
                tasks = await task.find().sort({ priority:1 });
            }else if(sortKey == "category"){
                tasks = await task.find().sort({ category:1 });
            }else if(sortKey == "createdDate"){
                tasks = await task.find().sort({ createdDate:1 });
            }else if(sortKey == "dueDate"){
                tasks = await task.find().sort({ dueDate:1 });
            }else{
                tasks = await task.find();
            }
            return tasks;
        }
    },
    Mutation: {
        create_user: async (_, { id,name,googleId, email,password}) => {
       
            const p = new User({id,name,googleId, email,password});
            p.id = p._id;
            const savedUser = await p.save();
            return savedUser.toObject();
        },
        create_task: async (_, { description,type,group, category,priority,dueDate, status}) => {
          
            let createdDate = new Date().getTime();
            const p = new task({ description,type,group,category,priority,createdDate,dueDate, status});
            p.id = p._id;
            const savedtask = await p.save();
            return savedtask.toObject();
        },
        update_task: async(_,{ id, description,category,priority,createdDate,dueDate, status}) => {
           
            const tasks = await task.find({id});
            if(tasks && tasks.length > 0){
                let task = tasks[0];
                // task.description = description;
                // task.category = category;
                // task.priority = priority;
                // task.createdDate = createdDate;
                // task.dueDate = dueDate;
                task.status = status;
                const savedtask = await task.save();
                return savedtask.toObject();
            }
            else
            {
                console.log('task does not exists with this id - error!  ');
                return null; // TODO
            }

        },
    //     delete_task: async(_,{ id}) => {
    //         const tasks = await task.find({id});
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