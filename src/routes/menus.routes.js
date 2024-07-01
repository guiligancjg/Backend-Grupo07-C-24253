import {Router} from "express";
import menuController from "../controllers/menus.controller.js";



const routes = Router();

//Rutas get
routes.get("/", menuController.getAllMenus);
//routes.get("/:userId", userController.getUserById);

//Rutas post
//routes.post("/", userController.createUser);

//Rutas actualizacion put
//routes.put("/:userId", userController.updateUser);

//Rutas eliminacion delete
//routes.delete('/:userId', userController.deleteUser);

export default routes;

