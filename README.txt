Proyecto-Redes IvanBarranco

empleado	(nombre, apellido, sucursal, turno)
falla	(empleadoid, hora, causa, perdida)


empleado
{
    id: 'number',
    name: 'string',
    lastname: 'string',
    sucursal: 'string',
    turno: 'string'
}

Falla
{
    id: 'number',
    empleadoid: 'number',
    hora: 'string',
    causa: 'string',
    perdida: 'number'
}

GET /empleados		//lista de empleados
GET /empleados/:id	//un empleado
POST /empleados		//insertar un empleado
PUT /empleados/:id	//actulizar empleado
DELETE /empleado/:id	//borrar empleado

GET /empleado/:id/fallas	//lista de fallas del empleado

GET /fallas		//lista de fallas
GET /fallas/:id		//una falla
POST /fallas		//insertar falla
PUT /fallas/:id		//actualizar falla
DELETE /fallas/:id	//borrar falla
