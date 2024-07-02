import db from "../database/connection.js";
//const db = myConnection;


const getAllMenus = (req, res) => {
    const sql = 'SELECT * FROM cocina_italiana.Menus;';

    db.query(sql, (err, result)=> {
        if(err) {throw err}

        res.json(result);
    });

}


const getMenuById = (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM cocina_italiana.Menus WHERE id = ? ;';

    db.query(sql,[id], (err, result)=> {
        if(err) {throw err}

        res.json(result);
    });

}


export default getAllMenus
