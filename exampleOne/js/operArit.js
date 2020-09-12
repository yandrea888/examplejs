function sum(){
//Recibir los datos
let nOne = parseInt (document.getElementById("nOne").value)
let nTwo = parseInt (document.getElementById("nTwo").value)
//Procesar los datos
let resultado = parseInt(nOne + nTwo)
//Entregar los resultados
document.getElementById("resulOperacion").innerHTML = resultado
}

function rest(){
    //Recibir los datos
    let nOne = parseInt (document.getElementById("nOne").value)
    let nTwo = parseInt (document.getElementById("nTwo").value)
    //Procesar los datos
    let resultado = parseInt(nOne - nTwo)
    //Entregar los resultados
    document.getElementById("resulOperacion").innerHTML = resultado
    }

function multiplication(){
    //Recibir los datos
    let nOne = parseInt (document.getElementById("nOne").value)
    let nTwo = parseInt (document.getElementById("nTwo").value)
    //Procesar los datos
    let resultado = parseInt(nOne * nTwo)
    //Entregar los resultados
    document.getElementById("resulOperacion").innerHTML = resultado
    }

    function division(){
        //Recibir los datos
        let nOne = parseInt (document.getElementById("nOne").value)
        let nTwo = parseInt (document.getElementById("nTwo").value)
        //Procesar los datos
        let resultado = parseInt(nOne / nTwo)
        //Entregar los resultados
        document.getElementById("resulOperacion").innerHTML = resultado
        }

    //calcular área triángulo

    function areaTriangle(){
        //Recibir los datos
        let base = parseInt (document.getElementById("base").value)
        let height = parseInt (document.getElementById("height").value)
        //Procesar los datos
        let resultado = parseInt(base * height)/2
        //Entregar los resultados
        document.getElementById("resulAreaTriangle").innerHTML = resultado
        } 
 
        function areaCircle(){
            //Recibir los datos
            let radio = parseInt (document.getElementById("radio").value)
            let numeroU = parseInt (document.getElementById("nUno").value)
            
            //Procesar los datos
            let resultado = parseFloat(Math.PI * radio * radio)
            //Entregar los resultados
            document.getElementById("resulAreaCircle").innerHTML = resultado
            } 