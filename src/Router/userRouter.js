const express = require('express');
const { getUser, createUser, updateUser, deleteUser, getAllUser, getUserPagination, loginUser, signUpUser, loginFacebook } = require('../Controllers/userController');
const userRouter = express.Router();

// __dirname       trả về đường dẫn file đang đứng  ~/set-up-sequelize/src/Routers
// process.cwd()   trả về đường dẫn gốc  ~/set-up-sequelize        
// yarn add multer 
let multer = require('multer');
// C1
let storage = multer.diskStorage({
    destination: process.cwd() + "/public/img",
    filename: (req, file, callback) => {
        // replace name file
        let newName = Date.now() + '_' + file.originalname;
        callback(null, newName)
    }
})
let upload = multer({
    storage
})
// file system
const fs = require('fs');
const { checkToken, privateAPI } = require('../utils/jwt');


// C2
// let upload = multer({
//     dest: process.cwd() + "/public/img" // nơi định nghĩa đường dẫn lưu file
// })
userRouter.post("/upload", upload.single('file'), (req, res) => {
    let file = req.file;
    fs.readFile(process.cwd() + "/public/img/" + file.filename, (err, data) => {
        // băm hình thành base 64
        let base64 = `data:${file.mimetype};base64,${Buffer.from(data).toString("base64")}`;
        // xóa hình
        fs.unlink(process.cwd() + "/public/img/" + file.filename, () => { })
        res.send(base64)
    })



    // sequelize food.udpate() -> file.filename 


    // tạo file 
    // fs.writeFile(process.cwd() + "/public/file/data.txt", "hello node 301", (err) => { });
    // // đọc file
    // fs.readFile(process.cwd() + "/public/file/data.txt", "utf8", (err,data) => {
    //     res.send(data) // quăng nội dung trong file data.txt ra ngoài
    // });
    // // xóa file
    // fs.unlink(process.cwd() + "/public/file/data.txt" , (err,data) => {})
})


userRouter.get('/get-user', getUser);
userRouter.get('/get-all-user', privateAPI, getAllUser);
userRouter.post('/create-user', createUser);
userRouter.put('/update-user', updateUser);
userRouter.delete('/delete-user/:user_id', deleteUser);
userRouter.get('/get-user-pagination/:page/:pageSize', getUserPagination);

userRouter.post('/login', loginUser);
userRouter.post('/sign-up', signUpUser);
userRouter.post('/login-facebook', loginFacebook);


module.exports = userRouter;