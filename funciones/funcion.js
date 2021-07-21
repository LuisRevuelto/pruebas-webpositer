function nombreDeLaFuncion(parametro) {
//
}

function chequearEdadDeTodos(listaDeEdades) {
  for(let index = 0; index < listaDeEdades.length; index++) {

    if( listaDeEdades[index] >= 18) {
      console.log('Adelante!')

    } else {

      console.log('Eres demasiado pequeño')
      
    }
  }
}

chequearEdadDeTodos()