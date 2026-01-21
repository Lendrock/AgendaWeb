import { Button } from "../button/Button.js";
let ItemTareas = (imgTarea, tarea, prioridad, editar, eliminar) => {
    let div = document.createElement("div");
    div.className = "item-tarea" ;

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgTarea}`;

    let etiquetaTarea = document.createElement("p");
    etiquetaTarea.textContent = tarea;

    let etiquetaPrioridad = document.createElement("p");

    let claseLimpia = textoPrioridad.toLowerCase().replace(/\s+/g, '');
    etiquetaPrioridad.className = `prioridad-${claseLimpia}`;

    let etiquetaEditar = document.createElement("div");
    let btnEditarTarea = Button(
        "",
        "editTask",
        "edit.svg",
        function(){
            console.log("Editar tarea");
        }
    );
    etiquetaEditar.appendChild(btnEditarTarea);
    
    let etiquetaEliminar = document.createElement("div");
    let btnEliminarTarea = Button(
        "",
        "deleteTask",
        "delete.svg",
        function(){
            console.log("Eliminar tarea");
        }
    );
    etiquetaEliminar.appendChild(btnEliminarTarea);

    let accionesCont = document.createElement("div");
    accionesCont.className = "tarea-acciones";

    btnEditarTarea.classList.add("btn-accion-tarea");
    btnEliminarTarea.classList.add("btn-accion-tarea");

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaTarea);
    div.appendChild(etiquetaPrioridad);
    accionesCont.appendChild(btnEditarTarea);
    accionesCont.appendChild(btnEliminarTarea);
    div.appendChild(accionesCont);

    return div;
}

export {ItemTareas}