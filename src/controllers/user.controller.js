import myConnection from "../database/connection.js";
//const db = myConnection;

export const userController = {};



userController.getAllUsers = async (req, res) => {
    console.log('getAllUsers called');
    try {
        const [rows] = await myConnection.query('SELECT * FROM Usuario');
        console.log('Users:', rows);
        res.json(rows);
    } catch (error) {
        console.error('Error getting all users:', error);
        res.status(500).json({ error: error.message });
    }
};
/*
userController.getAllUsers = (req, res) => {
    //res.send("Se buscan todos los Usuarios");
    console.log('entro');
    const sql = 'SELECT * FROM Usuario';

    db.query(sql, (err, result)=>{
        if(err){ throw console.log(err); }

        res.json({result});
        console.log(result);
    });
}*/

userController.getUserById = (req, res) => {
    res.send("Se busca un Usuario");
}


userController.createUser = (req, res) => {
    res.json({ message: "Se a creado un Usuario"});
}


userController.updateUser = (req, res) => {
    res.json({ message: "Se a actualizado el usuario"});
}


userController.deleteUser = (req, res) => {
    res.json({ message: "Se a eliminado al usuario"});
}



//export default {userController};