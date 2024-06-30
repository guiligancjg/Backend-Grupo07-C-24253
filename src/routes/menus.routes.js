const express = require("express");
const menusController = require('../controllers/menus.controller');


const routes = express.Router();

//Rutas get
routes.get("/", menusController.getAllMenus);
//routes.get("/:userId", userController.getUserById);

//Rutas post
//routes.post("/", userController.createUser);

//Rutas actualizacion put
//routes.put("/:userId", userController.updateUser);

//Rutas eliminacion delete
//routes.delete('/:userId', userController.deleteUser);


module.exports = routes;