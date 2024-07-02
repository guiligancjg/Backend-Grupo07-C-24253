import db from "../database/connection.js";
//const db = myConnection;


export const getAllMenus = (req, res) => {
    const sql = 'SELECT * FROM cocina_italiana.Menus;';

    db.query(sql, (err, result)=> {
        if(err) {throw err}

        res.json(result);
    });

}


