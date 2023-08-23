const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const md5 = require('md5');

class User extends Model {
  checkPassword(loginPw) {
    return md5(loginPw) === md5(this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = md5(newUserData.password);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = md5(updatedUserData.password);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
