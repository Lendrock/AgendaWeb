import {ContactList, TaskList} from "../contactos/db.js";
import { toDoList } from "../toDoList/toDoList.js";
function TareasForm(funcion) {

    let form = document.createElement("form");
    form.id = "new-tareas-form";

    //Titulo
    let title = document.createElement("h2");
    title.textContent = "Nueva Tarea";
    form.appendChild(title);

    //Campo Tarea
    let labelTarea = document.createElement("label");
    labelTarea.textContent = "Tarea: ";
    labelTarea.htmlFor = "tarea";

    let inputTarea = document.createElement("input");
    inputTarea.type = "text";
    inputTarea.id = "tarea";
    inputTarea.name = "tarea";
    inputTarea.required = "true";
    inputTarea.placeholder = "Ingrese la tarea";

    //Campo Prioridad
    let labelPrioridad = document.createElement("label");
    labelPrioridad.textContent = "Prioridad: ";
    labelPrioridad.htmlFor = "prioridad";

    let selecTarea = document.createElement("select");
    selecTarea.id = "prioridad";
    selecTarea.name = "prioridad";
    selecTarea.required = "true";

    let opciones = [
        {texto : "Seleccione una opción", valor : ""},
        {texto : "Con tiempo", valor : "con-tiempo"},
        {texto : "Urgencia", valor : "urgencia"}
    ];

    opciones.forEach((opcion) => {
        let option = document.createElement("option");
        option.textContent = opcion.texto;
        option.value = opcion.valor;
        selecTarea.appendChild(option);
    });
    let inputPrioridad = selecTarea;



    //Botones
    let btnSummit = document.createElement("button");
    btnSummit.type = "submit"
    btnSummit.textContent = "Guardar";

    let btnCancel = document.createElement("button");
    btnCancel.type = "button"
    btnCancel.textContent = "Cancelar";

    btnCancel.addEventListener("click", () => {
        if (inputTarea.value !== "" || inputPrioridad.value !== "") {
            inputTarea.value = "";
            inputPrioridad.value = "";
            console.log("Datos reseteados");
        }else{
            let container = document.getElementById("container");
            container.innerHTML = "";
            container.appendChild(toDoList());
            console.log("Formulario cerrado");
        }
    });

    form.appendChild(labelTarea);
    form.appendChild(inputTarea);
    form.appendChild(labelPrioridad);
    form.appendChild(inputPrioridad);
    form.appendChild(btnSummit);
    form.appendChild(btnCancel);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let tarea = {
            tarea: inputTarea.value
        };
        console.log(tarea);
        TaskList.push(tarea);
    });

    return form;
}
export {TareasForm};