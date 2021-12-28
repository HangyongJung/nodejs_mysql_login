const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    port: 3306
})
connection.connect()

module.exports = connection