const User = require('../Models/userModel')
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

const getUser = async (req, res) => {
    try {
        const data = await User.findAll({
            where: {
                full_name: {
                    [Op.like]: "%ang"
                }
            }
        });
        res.send(data);
    } catch (err) {
        res.status(500).send('server internal error')
    }
}
const getAllUser = async (req, res) => {
    try {
        const data = await User.findAll({});
        res.send(data);
    } catch (err) {
        res.status(500).send('server internal error')
    }
}
const createUser = async (req, res) => {
    try {
        const { full_name, email, pass_word } = req.body;
        await User.create({ full_name, email, pass_word })
        res.send('create user');
    } catch (err) {
        res.status(500).send('server internal error')
    }
}
const updateUser = async (req, res) => {
    try {
        const { full_name, email, pass_word } = req.body;
        const { user_id } = req.params;
        let newData = { full_name, email, pass_word }
        await User.update(newData, {
            where: {
                user_id
            }
        })
        res.send('update user');
    } catch (err) {
        res.status(500).send('server internal error')
    }
}
const deleteUser = async (req, res) => {
    try {
        const { user_id } = req.params;

        await User.destroy({
            where: {
                user_id
            }
        })
        res.send('delete user');
    } catch (err) {
        res.status(500).send('server internal error')
    }
}


module.exports = {
    getUser, createUser, updateUser, deleteUser, getAllUser
}