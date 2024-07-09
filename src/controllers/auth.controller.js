import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {potSingUp} from "../models/userModels.js";
import configJWT from "../config/configJWT.js"
import db from "../database/connection.js";

export const register = (req, res) => {
    const {email, password} = req.body;

    console.log(`Nombre del Usuario: ${email}`);
    console.log(`Password: ${password}`);


    
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    const newUser = {
        nombre: '', 
        email,
        telefono: '', 
        direccion: '', 
        password : hashedPassword
    };


    // Agregamos el usuario al array / o enviariamos a la base de datos
    potSingUp(newUser);

    //Generamos el token
    const payload = {
        email: newUser[1]
    };

    const secretKey = configJWT.secretKey;

    const options = {
        expiresIn: configJWT.tokenExpiresIn
    };


    const token = jwt.sign(payload,secretKey,options);

    //Envio del token al cliente
   
    res.status(201).send({ 
        auth: true, 
        token
    });
}
/*
// Función para iniciar sesión de un usuario
export const login = (req, res) => {
    // Extrae el nombre de usuario y la contraseña del cuerpo de la solicitud
    const { email, password } = req.body;

    // Busca en el arreglo 'users' un usuario que coincida con el nombre de usuario
    // Si el usuario no se encuentra, devuelve un error 404 con el mensaje 'Usuario no encontrado'
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(404).send({ message: 'Usuario no encontrado.' });
    }

    // Compara la contraseña proporcionada con la contraseña almacenada usando bcrypt
    // Si las contraseñas no coinciden, devuelve un error 401 con el mensaje 'Contraseña inválida'
    
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    
    if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null });
        // Enviamos 401: no autorizado, false: fallo en autentificación , null: no hay token disponible
    }

    // Genera un token JWT para el usuario PayLod(carga útil), claveSecreta, opciones
    const payload = { id: user.id, username: user.username}; 
    const secretKey = config.secretKey; // lo traemos del archivo config
    const options = { expiresIn: config.tokenExpiresIn } // parámetro opcional

    // Generamos el token
    const token = jwt.sign(payload, secretKey, options);

    // Envía el token JWT al cliente con estado 200 (éxito)
    res.status(200).send({ auth: true, token });
};
*/


export const login = ((req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Por favor, proporciona un email y una contraseña válidos' });
    }

    // Consulta SQL para buscar el usuario por email
    const sql = 'SELECT * FROM Usuarios WHERE email = ?';
    
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error al buscar el usuario en la base de datos:', err);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const user = results[0];
        console.log(user);

        const payload = {
            id: user.id,
            email: user.email
        };

        //console.log("payload: ", payload);
        const secretKey = configJWT.secretKey;

        const options = {
            expiresIn: configJWT.tokenExpiresIn
        };

        // Verificar la contraseña utilizando bcrypt
        bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
            if (bcryptErr || !bcryptResult) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            // Generar un token JWT
            const token = jwt.sign(payload, secretKey, options);

                    
            // Devolver el token como respuesta
            res.status(200).json({ 
                token,
                auth: true
            });

            
        });
    });
});


export const logout = ((req, res) => {
    
});





/*
export default {
    register,
    login
};

*/
