// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
nombres = [] //Array donde se almacenaran los nombres a sortear 

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value.trim() //Obtiene valor del elemento con Id "amigo" y le quita espacios
    let lista = document.getElementById("listaAmigos") //Selecciona el elemento con el Id "listaAmigos" y lo asigna a una variable 

    if (nombre == ""){ //si el campo de nombre esta vacio se emite alerta
        alert("El campo de nombre esta vacio");
        return;
    }
    else{ //Si el campo no esta vacio se agrega el texto al array nombres 
        nombres.push(nombre)
        lista.innerHTML = "";
    }
    for (i=0; i<nombres.length; i++){ //Para cada elemento de nombres
        let elemento_lista = document.createElement("li"); //Se le crea una respectiva etiqueta "li"  y se vincula a una variable
        elemento_lista.innerHTML = nombres[i]; //Se modifica el texto de los elementos "li"  
        lista.appendChild(elemento_lista); //Se agrega cada elementi "li" a lista que es un "ul"
    }
    document.getElementById("amigo").value = "" //Se limpia el texto introducido en "amigo"
}

function sortearAmigo(){
    let resultado = document.getElementById("resultado") //Selecciona el elemento con el Id "resultado"
    let nombre_sorteado = nombres[getRandomInt(nombres.length)] //Se genera un numero aleatorio utilizable dentro de nuestros parametros

    resultado.innerHTML = nombre_sorteado //Se modifica el contenido inicial de resultado
}

function getRandomInt(max) { //Obtiene un numero aleatorio entre 0 y la longitud del array nombres
  return Math.floor(Math.random() * max);
}