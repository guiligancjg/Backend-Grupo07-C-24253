import db from "../database/connection.js";
//const db = myConnection;


export const getAllMenus = async () => {
    const sql = 'SELECT * FROM cocina_italiana.Menus;';
    try {
        const [result] = await myConnection.promise().query(sql);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los menús' });
    }

}


/*
menuController.getAllMenus = (req, res) => {
    const sql = 'SELECT * FROM cocina_italiana.Menus;';

    db.query(sql, (err, result)=> {
        if(err) {throw err}

        res.json(result);
    });

}

*/