import db from "../database/connection.js";


export const pedidosUsuario = (req, res) => {
    const {id} = req.params;
    console.log(`Id del usuario: ${id}`);


    const sql = `
            SELECT 
                Usuarios.id AS usuarios_id,
                Usuarios.nombre AS usuarios_nombre,
                Usuarios.email AS usuarios_email,
                Usuarios.telefono AS usuarios_telefono,
                Usuarios.direccion AS usuarios_direccion,
                Pedidos.id AS pedido_id,
                Pedidos.fecha_pedido,
                Pedidos.total AS total_pedido,
                Pedidos.estado AS estado_pedido,
                PedidoDetalles.cantidad AS cantidad_menu,
                PedidoDetalles.precio AS precio_menu,
                Menus.id AS menu_id,
                Menus.nombre AS menu_nombre,
                Menus.descripcion AS menu_descripcion,
                Menus.categoria AS menu_categoria,
                Menus.imagen AS menu_imagen
            FROM 
                Usuarios
            JOIN 
                Pedidos ON Usuarios.id = Pedidos.usuarios_id
            JOIN 
                PedidoDetalles ON Pedidos.id = PedidoDetalles.pedido_id
            JOIN 
                Menus ON PedidoDetalles.menu_id = Menus.id
            WHERE 
                Usuarios.id = ?
            `;


            try {
                db.query(sql,[id], (err, result)=> {
                    if(err) {throw err}
            
                    res.status(200).json(result);
                    console.log(result);
                });
            } catch (error) {
                return res.json({ mensaje: "Error al mostrar un menu"});
            }
        


}