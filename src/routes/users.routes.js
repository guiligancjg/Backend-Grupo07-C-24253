import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';

const routes = Router();

//Rutas get
routes.get("/", userController.getAllUsers);
routes.get("/:userId", userController.getUserById);

//Rutas post
routes.post("/", userController.createUser);

//Rutas actualizacion put
routes.put("/:userId", userController.updateUser);

//Rutas eliminacion delete
routes.delete('/:userId', userController.deleteUser);


export default routes;