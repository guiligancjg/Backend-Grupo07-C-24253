const express = require('express');
const userRoutes = require("./routes/users.routes");
const indexRoutes = require("./routes/index.routes");

//2- Instanciamos express
const app = express();

//4- Declaramos el puerto


//5- Uso del middleware .json que convierte el cuerpo de solicitud
// en algo accesible por js
app.use(express.json());
app.use(indexRoutes);
app.use(userRoutes);



//6- Prefijo principal de las rutas y delegación de las sub-rutas
//app.use('/movies', movieRoutes);

const PORT = 3000; 
//7- Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

//8- Pasamos a configurar el router

