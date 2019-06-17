const express = require('express')
let router = express.Router()
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'tareas'

// GET consultar coleccion de tareas
router.get('/', (req, res, next) => {
    let sensorid = parseInt(req.body.sensorid)
    let lecturas = DB.select('lecturas', null, sensorid)
    res.status(200).send(lecturas)
});

//REalizar las consultas necesarias
// GET consultar tarea especifico
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let sensorid = parseInt(req.body.sensorid)
    let lectura = DB.select('lecturas', id, sensorid)
    res.status(200).send(lectura)
});

// POST insertar tarea
router.post('/', (req, res, next) => {
    let lectura = DB.insert('lecturas', req.body)
    res.status(200).send(lectura)
})

//del put tambien
// PUT actualizar tarea
router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let object = Object.assign(req.body, {id: id})
    let lectura = DB.update('lecturas', object)
    res.status(200).send(lectura)
})

// DELETE borrar tarea
router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let lectura = DB.remove('lecturas', id)
    res.status(200).send(lectura)
})

module.exports = router
