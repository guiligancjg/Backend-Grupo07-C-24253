import db from "../database/connection.js";
//const db = myConnection;


export const getAllMenus = async (req, res) => {
    const sql = 'SELECT * FROM cocina_italiana.Menus;';
    try {
        const [result] = await db.promise().query(sql);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los menús' });
    }

}


export const getMenuById = async (req, res) => {
    const {id} = req.params;
    const sql = `SELECT * FROM cocina_italiana.Menus WHERE Menus.id = ?;`;
    try {
        const [result] = await db.promise().query(sql, [id]);
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