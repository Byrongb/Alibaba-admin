/* Elementos del dom */
import {section_administrador, section_login} from './login.js';

export function adminstrador(){
  
    section_administrador.classList.add("activar-block");
    section_login.classList.remove("activar-flex");
    window.location="menu.html"
}