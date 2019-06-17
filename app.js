// web framework
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')

// logica para procesar los recursos
const indexRouter = require('./routes/index')
const sensoresrouter = require('./routes/sensores')
const lecturasrouter = require('./routes/lecturas')

let app = express()
// configuracion de servidor e interpretacion de mensajes del cliente
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

// rutas de los recursos, representa el Nivel 1 de un API REST
app.use('/', indexRouter) // pagina de hola mundo
app.use('/sensores', sensoresrouter) // operaciones hacia el recurso de 'sensores'
app.use('/sensores/:sensorid/lecturas', (req, res, next) => { // operaciones hacia el recurso de 'lecturas' del 'sensores'
    let sensorid = parseInt(req.params.sensorid)
    req.body.sensorid = sensorid
    next()
}, lecturasrouter)
app.use('/lecturas', lecturasrouter) // operaciones hacia el recurso de 'tareas'


module.exports = app
