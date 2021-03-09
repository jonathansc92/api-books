const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando get'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando get'
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando get'
    });
});

router.patch('/:id', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando get'
    });
});

router.patch('/:id', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando get'
    });
});

module.exports = router;
