import {Router} from "express";
import {getAllMenus} from "../controllers/menus.controller.js";



const routesMenu = Router();

//Rutas get
routesMenu.get("/", getAllMenus);
//routes.get("/:userId", userController.getUserById);

//Rutas post
//routes.post("/", userController.createUser);

//Rutas actualizacion put
//routes.put("/:userId", userController.updateUser);

//Rutas eliminacion delete
//routes.delete('/:userId', userController.deleteUser);

export default routesMenu;

