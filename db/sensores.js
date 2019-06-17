const name = 'sensores'

let schema = {
    id: 'number',
    type: 'string',
    location: 'string'
}

// contenido inicial
let data = [
    {
      id: 1,
      type: "Temperatura",
      location: "Hectarea 1"
    },
    {
      id: 2,
      type: "Humedad",
      location: "Hectarea 2"
    }
]

module.exports = {
    schema,
    data,
}
