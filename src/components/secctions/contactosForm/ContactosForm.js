import { ContactList } from "../contactos/db.js";
import { Contactos } from "../contactos/Contactos.js";

function ContactoForm(contactToEdit = null, index = null) {
    let form = document.createElement("form");
    form.className = "new-contact-form";

    // Titulo
    let title = document.createElement("h2");
    title.textContent = "Nuevo Contacto";
    form.appendChild(title);

    // Campo Nombre
    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre: ";
    labelNombre.htmlFor = "nombre";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    inputNombre.required = true;
    inputNombre.placeholder = "Ingrese el nombre";

    // Campo Telefono
    let labelTelefono = document.createElement("label");
    labelTelefono.textContent = "Teléfono: ";
    labelTelefono.htmlFor = "telefono";

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.id = "telefono";
    inputTelefono.required = true;
    inputTelefono.placeholder = "Ej: 123456789";

    // Botones de acción
    let btnSummit = document.createElement("button");
    btnSummit.type = "submit";
    btnSummit.textContent = "Guardar";

    let btnCancel = document.createElement("button");
    btnCancel.type = "button";
    btnCancel.textContent = "Cancelar";

    // Lógica botón cancelar
    btnCancel.addEventListener("click", () => {
        let hayContenido = inputNombre.value.trim() !== "" || inputTelefono.value.trim() !== "";
        let container = document.getElementById("container");

        if (hayContenido) {
            let confirmarSalida = confirm("Tienes cambios sin guardar. ¿Seguro que quieres salir?");
            if (confirmarSalida) {
                container.innerHTML = "";
                container.appendChild(Contactos());
            }
        } else {
            container.innerHTML = "";
            container.appendChild(Contactos());
        }
    });

    form.appendChild(labelNombre);
    form.appendChild(inputNombre);
    form.appendChild(labelTelefono);
    form.appendChild(inputTelefono);
    form.appendChild(btnSummit);
    form.appendChild(btnCancel);

    // Modo Edición
    if (contactToEdit) {
        title.textContent = "Editar Contacto";
        inputNombre.value = contactToEdit.nombre;
        inputTelefono.value = contactToEdit.telefono;
        btnSummit.textContent = "Actualizar";
    }

    // Evento Submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let nuevoContacto = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value
        };

        if (contactToEdit !== null) {
            ContactList[index] = nuevoContacto;
        } else {
            ContactList.push(nuevoContacto);
        }

        let container = document.getElementById("container");
        container.innerHTML = "";
        container.appendChild(Contactos());
    });

    return form;
}

export { ContactoForm };