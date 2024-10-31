// routes.js
const express = require('express');

module.exports = function(connection) {
    const router = express.Router();

    // Ruta para obtener todos los usuarios
    router.get('/users', (req, res) => {
        connection.query('SELECT * FROM users', (error, results) => {
            if (error) return res.status(500).send(error);
            res.json(results);
        });
    });

    // Ruta para agregar un nuevo usuario
    router.post('/users', (req, res) => {
        const user = req.body;
        connection.query('INSERT INTO users SET ?', user, (error, results) => {
            if (error) return res.status(500).send(error);
            res.status(201).send(`User added with ID: ${results.insertId}`);
        });
    });

    // Ruta para eliminar un usuario
    router.delete('/users/:id', (req, res) => {
        const id = req.params.id;
        connection.query('DELETE FROM users WHERE id = ?', id, (error, results) => {
            if (error) return res.status(500).send(error);
            res.send(`User deleted with ID: ${id}`);
        });
    });

    return router;
};
