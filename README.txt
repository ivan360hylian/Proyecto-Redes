Proyecto-Redes IvanBarranco

sensor	(type, location)
falla	(sensorid, hora, valorlectura)


sensor
{
    id: 'number',
    type: 'string',
    location: 'string'
}
// Ejemplo:
{
  id: 1,
  type: "Temperatura",
  location: "Hectarea 1"
}
//

lectura
{
    id: 'number',
    sensorid: 'number',
    hora: 'string',
    valorlectura: 'string'
}
// Ejemplo
{
    id: 1,
    sensorid: 1,
    hora: "10:30",
    valorlectura: "74.5"
}
//

GET /sensores		      //lista de Sensores Registrados
GET /sensores/:id	    //Consulta de un Sensor Especifico
POST /sensores		    //Insertar un Sensor
PUT /sensores/:id	    //Actualizar un Sensor
DELETE /sensores/:id	//Eliminar un Sensor

GET /sensor/:id/lecturas	//Lista de Lecturas de los Sensores

GET /lecturas		        //Lista de Lecturas
GET /lecturas/:id		    //Consult de una Lectura Especifica
POST /lecturas		      //Insertar una Lectura
PUT /lecturas/:id		    //Actualizar una Lectura
DELETE /lecturas/:id	  //Elimina una Lectura
