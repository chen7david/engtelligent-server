const { gql } = require('apollo-server')

const typeDefs = gql`
    # type definitions here ...
    type User {
        userId: String!
        username: String!
        email: String!
        disabled: Boolean!
        emailVerified: Boolean!
    }

    input addUserInfo {
        username: String!
        email: String!
        password: String!
    }

    extend type Query {
        # queries here ...
        users: [User]!
    }   
    
    extend type Mutation {
        addUser(addUserInfo: addUserInfo!): User!
    }
`


module.exports = {
    typeDefs
}