import { ContactList, TaskList } from "../contactos/db.js";
import { toDoList } from "../toDoList/toDoList.js";

function TareasForm(taskToEdit = null, index = null) {
    let form = document.createElement("form");
    form.id = "new-tareas-form";

    // Titulo
    let title = document.createElement("h2");
    title.textContent = "Nueva Tarea";
    form.appendChild(title);

    // Campo Tarea
    let labelTarea = document.createElement("label");
    labelTarea.textContent = "Tarea: ";
    labelTarea.htmlFor = "tarea";

    let inputTarea = document.createElement("input");
    inputTarea.type = "text";
    inputTarea.id = "tarea";
    inputTarea.name = "tarea";
    inputTarea.required = true;
    inputTarea.placeholder = "Ingrese la tarea";

    // Campo Prioridad
    let labelPrioridad = document.createElement("label");
    labelPrioridad.textContent = "Prioridad: ";
    labelPrioridad.htmlFor = "prioridad";

    let selecTarea = document.createElement("select");
    selecTarea.id = "prioridad";
    selecTarea.name = "prioridad";
    selecTarea.required = true;

    let opciones = [
        { texto: "Seleccione una opción", valor: "" },
        { texto: "Con tiempo", valor: "con-tiempo" },
        { texto: "Urgencia", valor: "urgencia" }
    ];

    opciones.forEach((opcion) => {
        let option = document.createElement("option");
        option.textContent = opcion.texto;
        option.value = opcion.valor;
        selecTarea.appendChild(option);
    });

    // Botones de acción
    let btnSummit = document.createElement("button");
    btnSummit.type = "submit";
    btnSummit.textContent = "Guardar";

    let btnCancel = document.createElement("button");
    btnCancel.type = "button";
    btnCancel.textContent = "Cancelar";

    // Lógica botón cancelar
    btnCancel.addEventListener("click", () => {
        let hayContenido = inputTarea.value.trim() !== "" || selecTarea.value !== "";
        let container = document.getElementById("container");

        if (hayContenido) {
            let confirmarSalida = confirm("Tienes cambios sin guardar. ¿Estás seguro de que quieres salir?");
            if (confirmarSalida) {
                container.innerHTML = "";
                container.appendChild(toDoList());
            }
        } else {
            container.innerHTML = "";
            container.appendChild(toDoList());
        }
    });

    form.appendChild(labelTarea);
    form.appendChild(inputTarea);
    form.appendChild(labelPrioridad);
    form.appendChild(selecTarea);
    form.appendChild(btnSummit);
    form.appendChild(btnCancel);

    // Modo Edición
    if (taskToEdit) {
        title.textContent = "Editar Tarea";
        inputTarea.value = taskToEdit.tarea;
        selecTarea.value = taskToEdit.prioridad;
        btnSummit.textContent = "Actualizar";
    }

    // Evento Submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let nuevaTarea = {
            tarea: inputTarea.value,
            prioridad: selecTarea.value
        };

        if (taskToEdit !== null) {
            TaskList[index] = nuevaTarea;
        } else {
            TaskList.push(nuevaTarea);
        }

        let container = document.getElementById("container");
        container.innerHTML = "";
        container.appendChild(toDoList());
    });

    return form;
}

export { TareasForm };