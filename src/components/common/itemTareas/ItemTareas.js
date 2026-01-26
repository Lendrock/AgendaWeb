import { Button } from "../button/Button.js";

let ItemTareas = (imgTarea, tarea, prioridad, editar, eliminar) => {
    let div = document.createElement("div");
    div.className = "item-tarea";

    // Imagen e información
    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgTarea}`;

    let etiquetaTarea = document.createElement("p");
    etiquetaTarea.textContent = tarea;

    // Etiqueta de prioridad
    let etiquetaPrioridad = document.createElement("p");
    etiquetaPrioridad.textContent = prioridad.replace('-', ' ');
    etiquetaPrioridad.style.textTransform = "capitalize";

    let claseLimpia = prioridad.toLowerCase().replace(/[\s-]/g, '');
    etiquetaPrioridad.className = `prioridad-${claseLimpia}`;

    // Apartado: Botones de acción
    let accionesCont = document.createElement("div");
    accionesCont.className = "tarea-acciones";

    let btnEditarTarea = Button(
        "",
        "editTask",
        "edit.svg",
        editar
    );

    let btnEliminarTarea = Button(
        "",
        "deleteTask",
        "delete.svg",
        eliminar
    );

    btnEditarTarea.classList.add("btn-accion-tarea");
    btnEliminarTarea.classList.add("btn-accion-tarea");

    // Construcción de item
    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaTarea);
    div.appendChild(etiquetaPrioridad);
    accionesCont.appendChild(btnEditarTarea);
    accionesCont.appendChild(btnEliminarTarea);
    div.appendChild(accionesCont);

    return div;
}

export { ItemTareas };