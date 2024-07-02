import db from "../database/connection.js";
//const db = myConnection;


export const getAllMenus = (req, res) => {
    const sql = 'SELECT * FROM Menus;';

    try {
        db.query(sql, (err, result)=> {
            if(err) {throw err}
    
            res.status(200).json(result);
        });
    } catch (error) {
        return res.json({ mensaje: "Error al mostrar todos los menus"});
    }


}


export const getMenuById = (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM Menus WHERE id = ? ;';

    try {
        db.query(sql,[id], (err, result)=> {
            if(err) {throw err}
    
            res.status(200).json(result);
        });
    } catch (error) {
        return res.json({ mensaje: "Error al mostrar un menu"});
    }


}

export const getCreateMenu = (req, res) => {
    const {nombre, descripcion, precio, categoria, imagen} = req.body;

    const sql = "INSERT INTO Menus (nombre, descripcion, precio, categoria, imagen) VALUES (?,?,?,?,?)";

    try {
        db.query(sql,[nombre, descripcion, precio, categoria, imagen], (err, result)=> {
            if(err) {
                res.status(502).json({ mensaje: "tuvo un error"});
            }
    
            res.status(200).json({ mensaje: "SE INGRESO EL MENU EXITOSAMENTE"});
        });
    } catch (error) {
        return res.json({ mensaje: "Error al ingresar el menu"});
    }
}



export const getUpdateMenu = (req, res) => {
    const {id} = req.params;
    const {nombre, descripcion, precio, categoria, imagen} = req.body;

    const sql = "UPDATE Menus SET nombre = ?, descripcion = ?, precio = ?, categoria = ?, imagen = ? WHERE id = ?";

    try {
        db.query(sql,[nombre, descripcion, precio, categoria, imagen, id], (err, result)=> {
            if(err) {throw err}
    
            res.status(200).json(result);
        });
    } catch (error) {
        return res.json({ mensaje: "Error al actualizar el menu"});
    }
}


export const getEliminarMenu = (req, res) => { 
    const {id} = req.params;

    const sql = "DELETE FROM Menus WHERE id = ?;";

    try {
        db.query(sql,[id], (err, result)=> {
            if(err) {throw err}
    
            res.status(200).json(result);
        });
    } catch (error) {
        return res.json({ mensaje: "Error al eliminar un Menu"});
    }
}