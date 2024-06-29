const mysql = require("mysql2");


//Configuración de la conexion de la base de datos en la pagina https://railway.app/
    const myConnection = mysql.createConnection({
        host: 'roundhouse.proxy.rlwy.net',
        user: 'root',
        password: 'IEVKbQhjhSijRksOWUdrpPWHVkqccKRr',
        port: 17662,
        database: 'cocina_italiana',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

   

    myConnection.connect((err)=> {
        if(err) {
            console.log(`Error de conexión con el servidor: ${err}` );
            return;
        }

        console.log(`Estado de conexión: CONECTADA`);
        const sqlCreatedb = 'CREATE DATABASE IF NOT EXISTS cocina_italiana';

        myConnection.query(sqlCreatedb, (err, result) => {
            if(err) {
                console.log(`Error de conexión con el servidor: ${err}`);
                return;
            }

            console.log(`Base de datos: CREADA/EXISTENTE/GARANTIZADA`);

            //CREACION DE TABLAS
            myConnection.changeUser({database: "cocina_italiana"}, (err)=> {
                if(err) {
                    console.log(`Error al cambiar la base de datos cocina_italiana: ${err}`);
                    return;
                }

                //Generamos la consulta para generar la tabla Usuario
                const createTableUsuarioQuery = `
                CREATE TABLE IF NOT EXISTS Usuario (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(100) NOT NULL,
                    email VARCHAR(100) NOT NULL UNIQUE,
                    telefono VARCHAR(20),
                    direccion VARCHAR(255),
                    password VARCHAR(255) NOT NULL,
                    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );`;


                //Pasamos la consulta
                myConnection.query(createTableUsuarioQuery, (err, result)=> {
                    if(err) {
                        console.log(`Error al crear la tabla usuario: ${err}`);
                        return;
                    }

                    console.log('Tabla Usuario: CREADA/EXISTENTE/GARANTIZADA');
                });


                //Generamos la consulta para generar la tabla Menu
                const createTableMenuQuery = `
                CREATE TABLE IF NOT EXISTS Menus (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(100) NOT NULL,
                    descripcion TEXT,
                    precio DECIMAL(10, 2) NOT NULL,
                    categoria VARCHAR(50)
                );`;


                //Pasamos la consulta
                myConnection.query(createTableMenuQuery, (err, result)=> {
                    if(err) {
                        console.log(`Error al crear la tabla menu: ${err}`);
                        return;
                    }

                    console.log('Tabla Menu: CREADA/EXISTENTE/GARANTIZADA');
                });


                //Generamos la consulta para generar la tabla Pedido
                const createTablePedidoQuery = `
                CREATE TABLE IF NOT EXISTS Menus (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(100) NOT NULL,
                    descripcion TEXT,
                    precio DECIMAL(10, 2) NOT NULL,
                    categoria VARCHAR(50)
                );`;


                //Pasamos la consulta
                myConnection.query(createTablePedidoQuery, (err, result)=> {
                    if(err) {
                        console.log(`Error al crear la tabla pedido: ${err}`);
                        return;
                    }

                    console.log('Tabla Pedido: CREADA/EXISTENTE/GARANTIZADA');
                });


                //Generamos la consulta para generar la tabla Detalle
                const createTableDetalleQuery = `
               CREATE TABLE IF NOT EXISTS PedidoDetalles (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    pedido_id INT,
                    menu_id INT,
                    cantidad INT NOT NULL,
                    precio DECIMAL(10, 2) NOT NULL,
                    FOREIGN KEY (pedido_id) REFERENCES Pedidos(id),
                    FOREIGN KEY (menu_id) REFERENCES Menus(id)
                );`;


                //Pasamos la consulta
                myConnection.query(createTableDetalleQuery, (err, result)=> {
                    if(err) {
                        console.log(`Error al crear la tabla detalle: ${err}`);
                        return;
                    }

                    console.log('Tabla Detalle: CREADA/EXISTENTE/GARANTIZADA');
                });



            });



        });
    });


module.exports = myConnection;

