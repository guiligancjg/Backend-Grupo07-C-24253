const db = require("../database/connection.js");
//const db = myConnection;

const getAllMenus = (req, res) => {
    const sql = 'SELECT * FROM cocina_italiana.Menus;';

    db.query(sql, (err, result)=> {
        if(err) {throw err}

        res.json(result);
    });

}
module.exports = {
    getAllMenus
};
