import mysql from 'mysql2/promise';



    const myConnection = mysql.createPool({
        host: 'roundhouse.proxy.rlwy.net',
        user: 'root',
        password: 'IEVKbQhjhSijRksOWUdrpPWHVkqccKRr',
        port: 17662,
        database: 'cocina_italiana',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    console.log('Entro a la base de datos');


export default myConnection;
