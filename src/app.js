import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/secctions/contactos/Contactos.js";
import { ContactoForm } from "./components/secctions/contactosForm/ContactosForm.js";
//App
let app = document.getElementById("app");

//section menu

let nav = document.getElementById("nav");
//Agregamos los botones

nav.appendChild(Button(
"Agenda",
"agenda",
"agenda.svg",
function(){
    container.innerHTML = "";
    container.appendChild(Contactos());
}
))
nav.appendChild(Button(
"Crear contacto",
"plus",
"add.svg",
function(){
    container.innerHTML = "";
    container.appendChild(ContactoForm());
}
))


nav.appendChild(Button("Usuario", "user", "person.svg "))
nav.appendChild(Button("Nuevo", "mas", "add.svg"))
nav.appendChild(Button("Lista de Tareas", "toDoList", "check.svg "))

//section container
let container = document.getElementById("container");



//cargar al DOM
app.appendChild(nav);
app.appendChild(container);

