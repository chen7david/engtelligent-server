const { ApolloServer, gql } = require('apollo-server')
const JWT = require('jsonwebtoken')
// const { User } = require('./models')
const { PORT, JWT_SECRET } = require('./config')
const { users } = require('./graphql')

const typeDefs = gql`
    type Query
    type Mutation
`
const server = new ApolloServer({
    cors:{
        origen: '*',
        credentials: true
    },
    typeDefs: [
        typeDefs, 
        users.typeDefs, 
    ],
    resolvers: [
        users.resolvers, 
    ],
    context: async ({req}) => {
        return {req}
    }
})

server.listen(PORT).then(({url}) => {
    console.log(`server running at ${url}`)
})