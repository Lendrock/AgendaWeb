import { ItemTareas } from "../../common/itemTareas/ItemTareas.js";
import { getTasksFromStorage, saveTasksToStorage } from "../../../utils/storage.js";
import { Button } from "../../common/button/Button.js";
import { TareasForm } from "../tareasForm/TareasForm.js";
import { mostrarConfirmacion } from "../../common/modal/Modal.js";

let toDoList = () => {
    let TaskList = getTasksFromStorage();

    let sectionToDoList = document.createElement("section");
    sectionToDoList.className = "toDoList";

    const renderList = () => {
        sectionToDoList.innerHTML = "";

        // Cabecera 
        let sectionHeader = document.createElement("div");
        sectionHeader.className = "toDoList-header";
        let h2 = document.createElement("h2");
        h2.textContent = "Lista de Tareas";
        let btnNuevaTarea = Button("", "newTask", "add.svg", function () {
            sectionToDoList.innerHTML = "";
            sectionToDoList.appendChild(TareasForm());
        });
        btnNuevaTarea.classList.add("btn-minimalist");
        sectionHeader.appendChild(h2);
        sectionHeader.appendChild(btnNuevaTarea);
        
        sectionToDoList.appendChild(sectionHeader);

        // Ordenamiento por prioridad
        TaskList.sort((a, b) => {
            const orden = { "urgencia": 1, "con-tiempo": 2 };
            return orden[a.prioridad] - orden[b.prioridad];
        });

        TaskList.forEach((task, index) => {
            sectionToDoList.appendChild(ItemTareas(
                "task.svg",
                task.tarea,
                task.prioridad,

                // Editar
                async function () {
                    const confirmar = await mostrarConfirmacion(`¿Deseas editar la tarea: "${task.tarea}"?`);
                    if (confirmar) {
                        sectionToDoList.innerHTML = "";
                        sectionToDoList.appendChild(TareasForm(task, index));
                    }
                },

                // Eliminar
                async function () {
                    const confirmar = await mostrarConfirmacion(`¡Cuidado! Vas a borrar: "${task.tarea}".`);
                    if (confirmar) {
                        TaskList.splice(index, 1);
                        saveTasksToStorage(TaskList); 
                        renderList();
                    }
                }
            ));
        });
    };

    renderList();
    return sectionToDoList;
}

export { toDoList };