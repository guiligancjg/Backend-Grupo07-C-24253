const express = require("express");
const {getAllUsers} = require('../controllers/user.controller');


const routes = express.Router();

//Rutas get
routes.get("/", getAllUsers);
//routes.get("/:userId", getUserById);

//Rutas post
//routes.post("/", createUser);

//Rutas actualizacion put
//routes.put("/:userId", updateUser);

//Rutas eliminacion delete
//routes.delete('/:userId', deleteUser);


module.exports = routes;
