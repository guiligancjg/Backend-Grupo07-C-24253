import {Router} from "express";
import userController from "../controllers/user.controller.js";



const routesUser = Router();

//Rutas get
routesUser.get("/", userController.getAllUsers);
//routes.get("/:userId", getUserById);

//Rutas post
//routes.post("/", createUser);

//Rutas actualizacion put
//routes.put("/:userId", updateUser);

//Rutas eliminacion delete
//routes.delete('/:userId', deleteUser);


export default routesUser;

