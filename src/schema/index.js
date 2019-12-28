const { gql } = require('apollo-server-express');

const schema = gql`
type task {
  id: String
  description: String
  type: String
  group: String
  category: String
  priority: Int
  createdDate: String
  dueDate: String
  status: String
  }
type Query {
    task(filterKey: String 
        filterVal: String
        id: String
        ):[task],
    tasks(sortKey: String): [task]
  }
  type Mutation {
    update_task (
        id: String
        status: String
    ): task,
    delete_task (
        id: String
    ): task,
    create_task (
      description: String
      type: String
      group: String
      category: String
      priority: Int
      dueDate: String
      status: String
    ): task
}
 
`;

module.exports = schema;