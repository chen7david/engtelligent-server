const { User } = require('./../../models')

const resolvers = {

    Query: {
        users: async (_, args, ctx) => {
            console.log(ctx)
            return await User.query()
        }
    },

    Mutation: {
        addUser: async (_, args, ctx) => {
            const user = await User.query().insert(args.addUserInfo)
            return user
        }
    },

    User: {

    }

}

module.exports = {
    resolvers
}