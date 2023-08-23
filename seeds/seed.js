const sequelize = require('../config/connection');
const { User, Fact } = require('../models');

const userData = require('./userData.json');
const poetryData = require('./factData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const fact of factData) {
    await Fact.create({
      ...fact,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
