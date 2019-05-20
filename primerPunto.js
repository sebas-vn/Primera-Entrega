const fs = require('fs');
const { cursos, opciones, argv } = require("./datos.js");

//Listado cursos ------------------
function createDescripcion(e, index, callback) {
  setTimeout(function () {
    var des = `El curso de ${e.nombre} identificado con el id #${e.id} tiene una duración de ${e.duracion} horas y por el valor de ${e.valor} pesos \n-------------------`;
    callback(des);
  }, 2000 * index);
}

function listarCursos() {
  cursos.forEach((e, index) => {
    createDescripcion(e, index, function (des) {
      console.log(des);
    });
  });
}

// Programa de inscripción

let curso = cursos.find(function (infoCurso) {
  return infoCurso.id == argv.i
})

if (curso == undefined) {
  console.log('No se ha encontrado el ID del curso que digitó, intentelo de nuevo')
  listarCursos();
} else {
  let inscripcion = `El estudiante ${argv.n} identificado con la cedula ${argv.c} se\nha inscrito al curso de ${cursos.nombre} identificado con el ID #${argv.i} con una\nduracion de ${cursos.duracion} horas, por el valor de ${cursos.valor} pesos`

  fs.writeFile('inscripcion.txt', inscripcion, (err) => {
    if (err) throw err;
    console.log('Se ha creado el archivo!!');
  });
}

