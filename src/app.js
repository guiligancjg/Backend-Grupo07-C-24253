import express from 'express';
//const express = require('express');

import userRoutes from './routes/users.routes.js';
//const userRoutes =  require("./routes/users.routes");
//import mysql from 'mysql';

//import indexRoutes from './routes/index.routes.js';

//import myConnection from 'express-myconnection';
//const indexRoutes = require("./routes/index.routes");

//2- Instanciamos express
const app = express();

//4- Declaramos el puerto
const PORT = 3000; 

//5- Uso del middleware .json que convierte el cuerpo de solicitud
// en algo accesible por js
app.use(express.json());
app.use('/users', userRoutes);
//app.use('/', indexRoutes);




//6- Prefijo principal de las rutas y delegación de las sub-rutas
//app.use('/movies', movieRoutes);


//7- Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

//8- Pasamos a configurar el router

