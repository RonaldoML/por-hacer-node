
let descripcion = {
    demand:true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

let completado = {
    alias: 'c',
    default: true,
    desc: 'Descripción de la actualización'
}

let optsCrear = {
    descripcion
};

let optsActualizar ={
    descripcion,
    completado
}

let optsBorrar = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optsCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarearecre', optsActualizar)
    .command('borrar', 'Borra una tarea de la lista', optsBorrar)
    .help()
    .argv;

module.exports = {
    argv
}