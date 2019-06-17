const name = 'lecturas'

let schema = {
    id: 'number',
    sensorid: 'number',
    hora: 'string',
    valorlectura: 'string'
}

// contenido inicial
let data = [
    {
      id: 1,
      sensorid: 1,
      hora: "10:30",
      valorlectura: "74.5"
    }
]

module.exports = {
    schema,
    data,
}
