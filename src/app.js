import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/secctions/contactos/Contactos.js";
//App
let app = document.getElementById("app");

//section menu

let nav = document.getElementById("nav");
//Agregamos los botones
nav.appendChild(Button("Usuario", "user", "person.svg "))
nav.appendChild(Button("Agenda", "agenda", "agenda.svg"))
nav.appendChild(Button("Nuevo", "mas", "add.svg"))
nav.appendChild(Button("Lista de Tareas", "toDoList", "check.svg "))

//section container
let container = document.getElementById("container");
container.appendChild(Contactos());

//cargar al DOM
app.appendChild(nav);
app.appendChild(container);

