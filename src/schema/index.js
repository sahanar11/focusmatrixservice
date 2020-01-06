const { gql } = require('apollo-server-express');

const schema = gql`
type user{
  id: String
  name: String
  googleId: String
  email: String
  password: String
}
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
  user(
    id: String
    ):[user],
    users(sortKey: String): [user]
    task(filterKey: String 
        filterVal: String
        id: String
        ):[task],
    tasks(sortKey: String): [task]
  }
  type Mutation {
    create_user(
      id: String
      name: String
      googleId: String
      email: String
      password: String
    ): user,
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