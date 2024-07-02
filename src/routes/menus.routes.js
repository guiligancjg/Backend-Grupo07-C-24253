import {Router} from "express";
import {getAllMenus, getMenuById} from "../controllers/menus.controller.js";



const routesMenu = Router();

//Rutas get
routesMenu.get("/", getAllMenus);
routesMenu.get("/:id", getMenuById);

//Rutas post
//routes.post("/", userController.createUser);

//Rutas actualizacion put
//routes.put("/:userId", userController.updateUser);

//Rutas eliminacion delete
//routes.delete('/:userId', userController.deleteUser);

export default routesMenu;

