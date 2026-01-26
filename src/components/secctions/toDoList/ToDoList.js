import { ItemTareas } from "../../common/itemTareas/ItemTareas.js";
import { TaskList } from "../contactos/db.js";
import { Button } from "../../common/button/Button.js";
import { TareasForm } from "../tareasForm/TareasForm.js";
import { mostrarConfirmacion } from "../../common/modal/Modal.js";

let toDoList = () => {
    let sectionToDoList = document.createElement("section");
    sectionToDoList.className = "toDoList";

    // Cabecera
    let sectionHeader = document.createElement("div");
    sectionHeader.className = "toDoList-header";

    let btnNuevaTarea = Button(
        "",
        "newTask",
        "add.svg",
        function () {
            sectionToDoList.innerHTML = "";
            sectionToDoList.appendChild(TareasForm());
        }
    );
    btnNuevaTarea.classList.add("btn-minimalist");

    let h2 = document.createElement("h2");
    h2.textContent = "Lista de Tareas";

    sectionHeader.appendChild(h2);
    sectionHeader.appendChild(btnNuevaTarea);
    sectionToDoList.appendChild(sectionHeader);

    // Renderizado de lista
    const renderList = () => {
        sectionToDoList.innerHTML = "";
        sectionToDoList.appendChild(sectionHeader);

        // Ordenamiento por prioridad
        TaskList.sort((a, b) => {
            const orden = { "urgencia": 1, "con-tiempo": 2 };
            return orden[a.prioridad] - orden[b.prioridad];
        });

        // Generación de items
        TaskList.forEach((task, index) => {
            sectionToDoList.appendChild(ItemTareas(
                "task.svg",
                task.tarea,
                task.prioridad,

                // Apartado: Editar
                async function () {
                    const confirmar = await mostrarConfirmacion(`¿Deseas editar la tarea: "${task.tarea}"?`);
                    if (confirmar) {
                        sectionToDoList.innerHTML = "";
                        sectionToDoList.appendChild(TareasForm(task, index));
                    }
                },

                // Apartado: Eliminar
                async function () {
                    const confirmar = await mostrarConfirmacion(`¡Cuidado! Vas a borrar: "${task.tarea}".`);
                    if (confirmar) {
                        TaskList.splice(index, 1);
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