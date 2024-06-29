const mysql = require("mysql2/promise");


const myConnectionLocal = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'cocina_italiana',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



console.log('Entro a la base de datos');

module.exports = myConnectionLocal;