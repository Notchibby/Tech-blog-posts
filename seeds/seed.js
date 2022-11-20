const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const comment of commentData){
    await Comment.create(comment);
  }

  for (const blog of blogData) {
    await Blog.create(blog);
  }

 

  process.exit(0);
};

seedDatabase();
