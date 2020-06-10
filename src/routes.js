const express = require('express');

const routes = express.Router();

routes.post('/login', (req, res) => {
    return res.json(req.body);
})

routes.get('/user/:id', (req, res) => {
    return res.json(req.params.id);
})

module.exports = routes;