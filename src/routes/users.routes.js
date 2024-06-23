const routes = require("express").Router();
const { userController} = require("../controllers/user.controller");

//Rutas get
routes.get("/user", userController.getAllUsers);
routes.get("/user", userController.getUserById);




module.exports = routes;