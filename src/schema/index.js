const { gql } = require('apollo-server-express');

const schema = gql`
type task {
  taskId: String
  taskDesc: String
  taskType: String
  taskGroup: String
  taskCategory: String
  taskPriority: Int
  taskCreatedDate: String
  taskDueDate: String
  isCompleted: Boolean
  }
type Query {
    task(filterKey: String 
        filterVal: String
        taskId: String
        ):[task],
    tasks(sortKey: String): [task]
  }
  type Mutation {
    update_task (
        taskId: String
        isCompleted: Boolean
    ): task,
    delete_task (
        taskId: String
    ): task,
    create_task (
      taskDesc: String
      taskType: String
      taskGroup: String
      taskCategory: String
      taskPriority: Int
      taskDueDate: String
      isCompleted: Boolean
    ): task
}
 
`;

module.exports = schema;