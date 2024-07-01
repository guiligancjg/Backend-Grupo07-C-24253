import mysql from "mysql2";


//Configuración de la conexion de la base de datos en la pagina https://railway.app/
    const myConnection = mysql.createConnection({
        host: 'roundhouse.proxy.rlwy.net',
        user: 'root',
        password: 'IEVKbQhjhSijRksOWUdrpPWHVkqccKRr',
        port: 17662,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

   
    
    
    myConnection.connect((err)=> {
        if(err) {
            console.log(`Error de conexión con el servidor hasta aqui llega: ${err}` );
            return;
        }

        
        const sqlCreatedb = 'CREATE DATABASE IF NOT EXISTS cocina_italiana;';

        myConnection.query(sqlCreatedb, (err, result) => {
            if(err) {
                console.log(`Error de conexión con el servidor: ${err}`);
                return;
            }
            console.log(`Estado de conexión: CONECTADA`);
            console.log(`Base de datos: CREADA/EXISTENTE/GARANTIZADA`);

            //CREACION DE TABLAS
            myConnection.changeUser({database: "cocina_italiana"}, (err)=> {
                if(err) {
                    console.log(`Error al cambiar la base de datos cocina_italiana: ${err}`);
                    return;
                }

                //Generamos la consulta para generar la tabla Usuario
                const createTableUsuariosQuery = `
                CREATE TABLE IF NOT EXISTS Usuarios (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(100) NOT NULL,
                    email VARCHAR(100) NOT NULL UNIQUE,
                    telefono VARCHAR(20),
                    direccion VARCHAR(255),
                    password VARCHAR(255) NOT NULL,
                    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );`;


                //Pasamos la consulta
                myConnection.query(createTableUsuariosQuery, (err, result)=> {
                    if(err) {
                        console.log(`Error al crear la tabla usuarios: ${err}`);
                        return;
                    }

                    console.log('Tabla Usuarios: CREADA/EXISTENTE/GARANTIZADA');
                });


                //Generamos la consulta para generar la tabla Menu
                const createTableMenuQuery = `
                CREATE TABLE IF NOT EXISTS Menus (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(100) NOT NULL,
                    descripcion TEXT,
                    precio DECIMAL(10, 2) NOT NULL,
                    categoria VARCHAR(50),
                    imagen VARCHAR(255)
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
                const createTablePedidosQuery = `
                CREATE TABLE IF NOT EXISTS Pedidos (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    usuarios_id INT,
                    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    total DECIMAL(10, 2) NOT NULL,
                    estado VARCHAR(50) NOT NULL,
                    FOREIGN KEY (usuarios_id) REFERENCES Usuarios(id)
                );`;


                //Pasamos la consulta
                myConnection.query(createTablePedidosQuery, (err, result)=> {
                    if(err) {
                        console.log(`Error al crear la tabla pedidos: ${err}`);
                        return;
                    }

                    console.log('Tabla Pedidos: CREADA/EXISTENTE/GARANTIZADA');
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


export default myConnection;


