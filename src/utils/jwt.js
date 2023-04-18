const jwt = require('jsonwebtoken');

// tạo token
const generateToken = (data) => {
    // data: string, number, object, buffer => ko có tham số thứ 3, nếu có tham số thứ 3 thì data ko dc truyền string
    // 
    let token = jwt.sign(data, "node-30", { algorithm: "HS256", expiresIn: "5m" });
    return token
}

// kiểm tra token
const checkToken = (token) => {
    return jwt.verify(token, "node-30");
}

// giải mã token
const decodeToken = (token) => {
    return jwt.decode(token)
}
const privateAPI = (req, res, next) => {
    try {
        // kiểm tra token
        let { token } = req.headers;
        checkToken(token);
        next();
    } catch (err) {
        res.status(401).send(err.message)
    }

}
module.exports = {
    generateToken,
    checkToken,
    decodeToken,
    privateAPI
}