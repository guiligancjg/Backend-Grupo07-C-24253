import settingDotEnv from "./config.js";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import routesUser from "./routes/users.routes.js";
import routesMenu from "./routes/menus.routes.js";
import routesPedidos from "./routes/pedidos.routes.js";
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js"


const app = express();
/*
//El unrlencoded debe ir antes de las rutras app.use('/menus', routesMenu);
y se debe user en Postman x-www-form-urlencoded para mandar los datos
*/
app.use(express.urlencoded({ extended: true })); 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {port} = settingDotEnv(); 



app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/users', routesUser);
app.use('/menus', routesMenu);
app.use('/pedidos', routesPedidos);
app.use('/', authRoutes);



//Iniciamos el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto: ${port}`);
});



