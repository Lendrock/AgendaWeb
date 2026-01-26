import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/secctions/contactos/Contactos.js";
import { ContactoForm } from "./components/secctions/contactosForm/ContactosForm.js";
import { toDoList } from "./components/secctions/toDoList/ToDoList.js";
import { TareasForm } from "./components/secctions/tareasForm/TareasForm.js";
import { Usuario } from "./components/secctions/usuario/Usuario.js";
//App
let app = document.getElementById("app");

//section menu

let nav = document.getElementById("nav");
//Agregamos los botones

nav.appendChild(Button(
    "Usuario",
    "user",
    "person.svg",
    function(){
        container.innerHTML = "";
        container.appendChild(Usuario());
    }
));

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
nav.appendChild(Button(
"Tareas por hacer",
"toDoList","check.svg",
function(){
    container.innerHTML = "";
    container.appendChild(toDoList());
}
))
nav.appendChild(Button(
    "Nueva Tarea", 
    "newTask", 
    "add.svg", 
    function(){
        container.innerHTML = "";
        container.appendChild(TareasForm());
    }
))



//section container
let container = document.getElementById("container");

async function tareas(){
    try {
        let data = await fetch ("https://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);
    } catch (error) {
        
    }
}

tareas();

console.log("Completado")

//cargar al DOM
app.appendChild(nav);
app.appendChild(container);

