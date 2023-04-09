const { Sequelize } = require('sequelize');
const { successCode, errorCode } = require('../utils/response');
const Op = Sequelize.Op;

const initalModel = require('../Models/init-models');
const sequelize = require('../Models/index')
const models = initalModel(sequelize)

const getUser = async (req, res) => {
    try {
        const data = await models.user.findAll({
            where: {
                full_name: {
                    [Op.like]: "%ang"
                }
            }
        });
        // res.send(data);
        successCode(res, "get User success", data);
    } catch (err) {
        // res.status(500).send('server internal error')
        errorCode(res, 'lỗi BE')
    }
}
const getAllUser = async (req, res) => {
    try {
        const data = await models.food.findAll({
            include:['type']
        });

        successCode(res, "get all user success", data);
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
const createUser = async (req, res) => {
    try {
        const { full_name, email, pass_word } = req.body;
        await models.user.create({ full_name, email, pass_word })
        successCode(res, "craete user success", '');
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
const updateUser = async (req, res) => {
    try {
        const { full_name, email, pass_word } = req.body;
        const { user_id } = req.params;
        let newData = { full_name, email, pass_word }
        await models.user.update(newData, {
            where: {
                user_id
            }
        })
        successCode(res, "update user success", '');
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
const deleteUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        console.log(user_id)

        await models.user.destroy({
            where: {
                user_id 
            }
        })
        successCode(res, "delete user success", '');
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}


module.exports = {
    getUser, createUser, updateUser, deleteUser, getAllUser
}