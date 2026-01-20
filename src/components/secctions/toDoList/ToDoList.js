import { ItemTareas } from "../../common/itemTareas/ItemTareas.js";
import { TaskList } from "../contactos/db.js";
import { Button } from "../../common/button/Button.js";
import { TareasForm } from "../tareasForm/TareasForm.js";
let toDoList = () => {
    let sectionToDoList = document.createElement("section");
    sectionToDoList.className = "toDoList";

    let sectionHeader = document.createElement("div");
    sectionHeader.className = "toDoList-header";

    let btnNuevaTarea = Button(
        "", 
        "newTask", 
        "add.svg",
        function(){
            sectionToDoList.innerHTML = "";
            sectionToDoList.appendChild(TareasForm());
        });
    btnNuevaTarea.classList.add("btn-minimalist");

    let h2 = document.createElement("h2");
    h2.textContent = "Lista de Tareas";
    
    sectionHeader.appendChild(h2);
    sectionHeader.appendChild(btnNuevaTarea);
    
    sectionToDoList.appendChild(sectionHeader);

    TaskList.forEach((task) => {
        sectionToDoList.appendChild(ItemTareas(
            "task.svg",
            task.tarea, 
            task.prioridad,    
            function() { 
                console.log("Editando bloque:", task.tarea);
            },
            function() { 
            console.log("Eliminando bloque:", index);
            TaskList.splice(index, 1);
            },
            ));
    });

    return sectionToDoList;
}

export {toDoList}