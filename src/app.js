import settingDotEnv from "./config.js";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import routesUser from "./routes/users.routes.js";
import routesMenu from "./routes/menus.routes.js";
import cors from 'cors';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const {PUERTO} = settingDotEnv(); 
const PORT = PUERTO || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/users', routesUser);
app.use('/menus', routesMenu);
app.use(cors());

//Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});



