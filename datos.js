const cursos = [
  {
    id: 1,
    nombre: 'Programación',
    duracion: 45,
    valor: 70000
  },
  {
    id: 2,
    nombre: 'Matematicas',
    duracion: 30,
    valor: 100000
  },
  {
    id: 3,
    nombre: 'Artes Escénicas',
    duracion: 25,
    valor: 20000
  },
  {
    id: 4,
    nombre: 'Portugues',
    duracion: 10,
    valor: 25000
  },
];

const opciones = {
  id: {
    demand: true,
    alias: 'i'
  },
  nombre: {
    demand: true,
    alias: 'n'
  },
  cedula: {
    demand: true,
    alias: 'c'
  }
}

const argv = require('yargs')
  .command('inscribir', 'Inscribirme en un curso', opciones)
  .argv


module.exports = {
  cursos,
  opciones,
  argv
}