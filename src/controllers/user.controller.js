const db = require("../database/connection.js");
//const db = myConnection;

const getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM cocina_italiana.Usuarios;';

    db.query(sql, (err, result)=> {
        if(err) {throw err}

        res.json(result);
    });

}


module.exports = {
    getAllUsers

}

/*
    getUserById,
    createUser,
    updateUser,
    deleteUser

*/
