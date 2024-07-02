import {Router} from "express";
import {getAllMenus, getCreateMenu, getMenuById, getUpdateMenu} from "../controllers/menus.controller.js";



const routesMenu = Router();

//Rutas get
routesMenu.get("/", getAllMenus);
routesMenu.get("/:id", getMenuById);

//Rutas post
routesMenu.post("/", getCreateMenu);

//Rutas actualizacion put
routesMenu.put("/:id", getUpdateMenu);

//Rutas eliminacion delete
routesMenu.delete("/:id", getUpdateMenu);

export default routesMenu;

