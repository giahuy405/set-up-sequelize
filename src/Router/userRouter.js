const express = require('express');
const { getUser, createUser, updateUser, deleteUser, getAllUser } = require('../Controllers/userController');
const userRouter = express.Router();

userRouter.get('/get-user', getUser);
userRouter.get('/get-all-user', getAllUser);
userRouter.post('/create-user', createUser);
userRouter.put('/update-user', updateUser);
userRouter.delete('/delete-user', deleteUser);

module.exports = userRouter;