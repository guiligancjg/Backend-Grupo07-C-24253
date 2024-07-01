import db from "../database/connection.js";
//const db = myConnection;

const menuController = {};

menuController.getAllMenus = (req, res) => {
    const sql = 'SELECT * FROM cocina_italiana.Menus;';

    db.query(sql, (err, result)=> {
        if(err) {throw err}

        res.json(result);
    });

}

export default menuController;
