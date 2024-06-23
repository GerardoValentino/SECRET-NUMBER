let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Choose a number between 1 and 10';

let numeroSecreto = generarNumeroSecreto();
let intentos = 1; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;   
    return; 
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez!' : 'veces!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    else {
        asignarTextoElemento('p', 'El numero secreto es menor');
    }
    intentos++;
    limpiarCaja();
     
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function intentoUsuario() {
    alert('Hiciste click en el boton mi chavo:D');
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles :(');
    } else {
        // Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Secret number');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    // Generar el numero aleatorio
    // Inicializar el numero de intentos
    // deshabilitar el boton de "nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();


