import {Router} from "express";

import { pedidosUsuario } from "../controllers/pedidos.controller.js";


const routesPedidos = Router();


//Pedidos Usuario
routesPedidos.get('/:id', pedidosUsuario);


export default routesPedidos;