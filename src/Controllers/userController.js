const { Sequelize } = require('sequelize');
const { successCode, errorCode, failCode } = require('../utils/response');
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
            include: ['type']
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

        const deletedRowsCount = await models.user.destroy({
            where: {
                user_id
            }
        })
        if (deletedRowsCount > 0) {
            successCode(res, "User has been successfully deleted.", deletedRowsCount);
        } else {
            errorCode(res, 'User not found.');
        }
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
const getUserPagination = async (req, res) => {
    try {
        let { page, pageSize } = req.params;

        const index = (page - 1) * pageSize;
        let data = await models.user.findAll({
            offset: index, // index bắt đầu từ 0 
            limit: Number(pageSize) // số lượng lấy (phải để kiểu số để dấu +pageSize hoặc dùng Number()) 
        })
        successCode(res, "delete user success", data);
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}

const loginUser = async (req, res) => {
    try {
        let { email, pass_word } = req.body;

        let checkUser = await models.user.findOne({
            where: {
                email,
            }
        })
        if (checkUser.length > 0) {
            // login thành công
            if (checkUser.pass_word === pass_word) {
                successCode(res, "token", data);
            } else {
                failCode(res, 'password  fail', '')
            }
        } else {
            // ko thành công
            failCode(res, 'email  fail', '')
        }

    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}


const signUpUser = async (req, res) => {
    try {
        const { full_name, email, pass_word } = req.body;
        await models.user.create({ full_name, email, pass_word })
        successCode(res, "sign up success", '');
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}


module.exports = {
    getUser, createUser, updateUser, deleteUser, getAllUser, getUserPagination, loginUser, signUpUser
}