const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Models/index');
class User extends Model { }
User.init({
    user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    pass_word: {
        type: DataTypes.STRING,
    },
}, {
    tableName: "user",
    modelName: "User",
    timestamps: false,
    sequelize
});

module.exports = User