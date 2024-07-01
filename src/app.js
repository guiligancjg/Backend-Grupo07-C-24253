import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import userRoutes from "./routes/users.routes.js";
import routesMenu from "./routes/menus.routes.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//2- Instanciamos express
const app = express();

//4- Declaramos el puerto
const PORT = 3000; 
app.use(express.static(path.join(__dirname, 'public')));
//5- Uso del middleware .json que convierte el cuerpo de solicitud
// en algo accesible por js
app.use(express.json());
app.use('/users', userRoutes);
app.use('/menus', routesMenu);

//app.use('/', indexRoutes);




//6- Prefijo principal de las rutas y delegación de las sub-rutas
//app.use('/movies', movieRoutes);


//7- Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

//8- Pasamos a configurar el router

