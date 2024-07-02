import settingDotEnv from "./config.js";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import routesUser from "./routes/users.routes.js";
import routesMenu from "./routes/menus.routes.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const {port} = settingDotEnv(); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/users', routesUser);
app.use('/menus', routesMenu);


//Iniciamos el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto: ${port}`);
});



