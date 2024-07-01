import db from "../database/connection.js";
//const db = myConnection;

const userController = {};

userController.getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM cocina_italiana.Usuarios;';

    db.query(sql, (err, result)=> {
        if(err) {throw err}

        res.json(result);
    });

}

export default userController;


/*
    getUserById,
    createUser,
    updateUser,
    deleteUser

*/
