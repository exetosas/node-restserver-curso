const express = require('express');

const app = express();
//Ejemplo de peticiones rest 

app.get('/usuario', function(req, res) {
    res.json('get usuario')
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    }


    res.json({ casa: body.nombre });
});


app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    console.log(`id:${id}`);

    res.json({
        id
    });

});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
});

module.exports = app;