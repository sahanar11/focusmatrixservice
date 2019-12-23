const { gql } = require('apollo-server-express');

const schema = gql`
type Task {
    taskId: Int,
    taskDesc: String,
    isCompleted: Boolean 
  }
type Query {
    task(filterKey: String 
        filterVal: String
        taskId: Int
        ):[Task]
    tasks(sortKey: String): [Task]
  }
  type Mutation {
  
    create_task (
        taskId: Int
        taskDesc: String
        taskCategory: String
        priority: Int
        taskDueDate: String
        isCompleted: Boolean
    ): Task
}
 
`;

module.exports = schema;