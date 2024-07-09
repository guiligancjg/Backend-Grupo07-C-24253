import db from "../database/connection.js";

export const potSingUp = (newUser) => {
    
    const sql = "INSERT INTO Usuarios (nombre, email, telefono, direccion, password) VALUES (?,?,?,?,?)";
    
    console.log(newUser);

   try {
        db.query(sql,[
            newUser.nombre,
            newUser.email,
            newUser.telefono,
            newUser.direccion,
            newUser.password
        ], (err, result)=> {
            if(err) {
                console.log({ mensaje: "Hubo un error al crear el Usuario"});
            }
    
            console.log({ mensaje: "SE CREO EL USUARIO EXITOSAMENTE"});
        });
    } catch (error) {
        console.log ({ mensaje: "Error al crear el Usuario"});
    }
}

