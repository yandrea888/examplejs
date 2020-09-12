function mostrarMensaje(){
let edad = parseInt(document.getElementById('edad').value)

//if (edad >= 18) {
  //  mensaje = "Sos mayor de edad"
//} else {
  //  mensaje = "Sos menor de edad"
//}

//If con operador terniario
let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad"
//alert(mensaje)
document.write(mensaje)
}

function mostrarMensajeDos(){
    let edadP = parseInt(document.getElementById('edadP').value)
    let estaturaP = parseFloat(document.getElementById('estaturaP').value)
    let pesoP = parseInt(document.getElementById('pesoP').value)

    const parametroEdad = 80
    const parametroEstatura = 1.40
    const parametroPeso = 70
    let mensajeDecision = ""

    //if (edadP <= parametroEdad) {
      //  if (estaturaP >= parametroEstatura) {
        //    if (pesoP == parametroPeso) {
          //      mensajeDecision = "Apto para realizar el deporte"
            //} else {
              //  mensajeDecision = "No apto. Peso no válido"
            //}
        //} else {
          //  mensajeDecision = "No apto. Estatura no válida"
       // }
    //} else {
        //mensajeDecision = "No apto. Edad no permitida"
    //}

    //If con operador lógico AND(&&)
    if (edadP <= parametroEdad && estaturaP >= parametroEstatura && pesoP == parametroPeso ){
        mensajeDecision = "Apto para realizar el deporte"
    }else{
        mensajeDecision = "No apto para realizar el deporte"
    }

    //If con operador lógico OR(||)
    if (edadP <= parametroEdad || estaturaP >= parametroEstatura || pesoP == parametroPeso ){
        mensajeDecision = "Apto para realizar el deporte"
    }else{
        mensajeDecision = "No apto para realizar el deporte"
    }

    alert(mensajeDecision)
}

