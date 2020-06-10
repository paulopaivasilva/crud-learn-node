const express = require('express');
const mongoose = require('mongoose');

const routes = express.Router();

routes.get('/', (req, res) => {
    mongoose.connect('mongodb://admin:admin2020@ds115340.mlab.com:15340/heroku_70kzsjw3');
    const connect = mongoose.connection
    connect.once('open', () => {
        res.json({ data: 'deu certo' });
    }).on('error', () => {
        res.json({ data: 'erro' })
    })

})

routes.post('/login', (req, res) => {
    return res.json(req.body);
})

routes.get('/user/:id', (req, res) => {
    return res.json(req.params.id);
    
})

module.exports = routes;