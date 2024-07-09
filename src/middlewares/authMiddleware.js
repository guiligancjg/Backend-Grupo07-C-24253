/**
 * El middleware de autenticación verifica el token JWT 
 * incluido en las solicitudes a rutas protegidas. 
 * Si el token es válido, permite que la solicitud continúe, 
 * si no, bloquea el acceso.
 */

// Importa el módulo jsonwebtoken para verificar los tokens
//const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken";
// Importa el módulo config para manejar configuraciones
//const config = require('../config/config');
import config from "../config/configJWT.js";

// Middleware de autenticación
// En Express, un middleware es una función que tiene acceso 
// al objeto de solicitud (req), al objeto de respuesta (res),
// y a la siguiente función de middleware en el ciclo de solicitud-respuesta, 
// que se denota generalmente como next.

 const authMiddleware= (req, res, next)=> {
  // Determina si hay un token en la cabecera de autorización
  const authHeader = req.headers['authorization'];
  const auth = req.headers['auth'];


  console.log(authHeader);
  console.log(auth);

  // Si no hay token en la cabecera, devuelve un error 401 (no autorizado)
  if (!authHeader && !auth){
    return res.status(401).send({ auth: false, message: 'No se provee token en la cabecera' });}; 

  // Extrae el token de la cabecera (formato "Bearer [token]") bearer(portador)
  const token = authHeader.split(' ')[1];
  console.log(token);
  // En este caso, split(' ') se utiliza para dividir el encabezado por espacios en blanco 
  // y [1] se utiliza para seleccionar la segunda parte después de "Bearer"

  // Si no existe el token extraído, devuelve un error 403 (denegado)
  if (!token){
    return res.status(403).send({ auth: false, message: "No se provee token" });};
    //acceso denegado, la autentificación falló, no se provee token

  // Verifica el token usando la clave secreta y maneja los errores posibles
  // Traemos la clave secreata para utilizarla en .verify
  const secretKey = config.secretKey;
  console.log(secretKey);

  // (err, decoded)=>{} del tercer parametro es una callback que carga con dos parámetros
  // err: Un error si la verificación falla.
  // decoded: El payload (carga útil) decodificado si la verificación es exitosa.

  jwt.verify(token, secretKey, (err, decoded) => {
    // Si hay un error al verificar como un token mal formado, devuelve un error con mensaje
    if (err) 
      return res.status(500).json({ auth: false, message: 'Error al autenticar el token.' });
    
    // Si todo está bien con el token, procede con la solicitud y guarda el id del usuario en request.user_id 
    //req.userId = decoded.id;
    req.id = decoded.id;
    req.email = decoded.email;
    next(); // Llama a la siguiente función del middleware o controlador
  });
};

//Exportacion del módulo
export default authMiddleware;

// Pasamos a configurar authroutes

