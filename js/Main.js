/* Librería de los programas */
import {login} from "./login.js"


function recuperar_datos(e) {
    e.preventDefault(); //<-- Evita que el formulario se recargue

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    //Programa login
    login(username,password);
}

// Acción del boton
var bt_entrar = document.querySelector("#login");//<-- Instancia del formulario
bt_entrar.addEventListener('submit',recuperar_datos); //<-- Evento

