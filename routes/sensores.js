const express = require('express');
let router = express.Router();
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'usuarios'

// GET consultar coleccion de usuarios
router.get('/', (req, res, next) => {
  let sensores = DB.select('sensores')
  res.status(200).send(sensores)
});

// GET consultar usuario especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let sensor = DB.select('sensores', id)
  res.status(200).send(sensor)
});

// POST insertar usuario
router.post('/', (req, res, next) => {
  let sensor = DB.insert('sensores', req.body)
  res.status(200).send(sensor)
})

// PUT actualizar usuario
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {id: id})
  let sensor = DB.update('sensores', object)
  res.status(200).send(sensor)
})

// DELETE borrar usuario
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let sensor = DB.remove('sensores', id)
  res.status(200).send(sensor)
})

module.exports = router;
