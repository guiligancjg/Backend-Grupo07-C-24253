
// Importamos el controlador express
//const express = require('express');
import express from "express";
// Importar el controlador de autenticación
//const authController = require('../controllers/authController');
import {register, login, logout} from "../controllers/auth.controller.js";

// Importar el middleware de autenticación
//const authMiddleware = require('../middlewares/authMiddleware');
import authMiddleware from "../middlewares/authMiddleware.js";

// Crear una nueva instancia de Router
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', register);

// Ruta para iniciar sesión con un usuario existente
router.post('/login', login);

// Ruta para iniciar sesión con un usuario existente
router.post('/login', logout);

// Ruta protegida que requiere autenticación previa del usuario.
router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({
        auth: true,
        message: 'Acceso permitido',
        email: req.email,
        id: req.id
        
    });  
});


export default router;
//module.exports = router;