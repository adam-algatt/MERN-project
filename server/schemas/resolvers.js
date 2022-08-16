const { User, Thought } = require('../models');

const resolvers = {
  //R of CRUD operations for graphql 
  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('thoughts')
        .populate('friends');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    }
  },
  //CUD of CRUD for graphql
  Mutation: {
addUser: async (parent, args) => {
const user = await User.create(args);
return user;
}, 
login: async(parent, args) => {
// const login = await User.post
}
  }
};

module.exports = resolvers;
