const User = require('./User');
const Fact = require('./Fact');

User.hasMany(Fact, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Fact.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Fact };
