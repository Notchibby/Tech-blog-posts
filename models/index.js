const User = require('./User');
const Blog = require('./blog');
const Comment = require('./comment')

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE'

});

Comment.belongsTo(Blog, {
  foreignKey:'comment_id'
})



module.exports = { User, Blog, Comment };
