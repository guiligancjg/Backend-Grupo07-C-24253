const userController = {}



userController.getAllUsers = (req, res) => {
    res.send("Se buscan todos los Usuarios");
}

userController.getUserById = (req, res) => {
    res.send("Se busca un Usuario");
}


userController.createUser = (req, res) => {
    res.send("Se a creado un Usuario");
}

module.exports = { userController };