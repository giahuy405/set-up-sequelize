
require('dotenv').config()
 
const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE, DB_PORT, DB_DIALECT } = process.env;

module.exports = {
    db_host: DB_HOST,
    db_user: DB_USER,
    db_pass: DB_PASS,
    db_database: DB_DATABASE,
    db_port: DB_PORT,
    db_dialect: DB_DIALECT
}