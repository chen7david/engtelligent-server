const { gql } = require('apollo-server')

const typeDefs = gql`
    # type definitions here ...

    extend type Query {
        # queries here ...
        helloworld: String!
    }   
    
    extend type Mutation {
        hello(name: String!):String!
    }
`


module.exports = {
    typeDefs
}