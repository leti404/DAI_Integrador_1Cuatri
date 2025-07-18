const pool = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  // Aquí validás datos, checás sintaxis, insertás el usuario en la base,
  // retornás status y mensajes según la consigna
};

exports.login = async (req, res) => {
  // Aquí puedes buscar el usuario, comparar contraseñas,
  // generar y devolver el token JWT
};
