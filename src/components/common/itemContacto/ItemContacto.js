import { Button } from "../button/Button.js";

let ItemContactos = (imgContacto, nombre, telefono, editar, eliminar) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    // Información de contacto
    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgContacto}`;

    let infoCont = document.createElement("div");
    infoCont.className = "contacto-info";

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.className = "contacto-nombre";
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.className = "contacto-telefono";
    etiquetaTelefono.textContent = telefono;

    infoCont.appendChild(etiquetaNombre);
    infoCont.appendChild(etiquetaTelefono);

    // Apartado: Botones de acción
    let accionesCont = document.createElement("div");
    accionesCont.className = "contacto-acciones";

    let btnEditar = Button("", "editContact", "edit.svg", editar);
    let btnEliminar = Button("", "deleteContact", "delete.svg", eliminar);

    btnEditar.classList.add("btn-accion-contacto");
    btnEliminar.classList.add("btn-accion-contacto");

    accionesCont.appendChild(btnEditar);
    accionesCont.appendChild(btnEliminar);

    // Construcción de item
    div.appendChild(etiquetaImg);
    div.appendChild(infoCont);
    div.appendChild(accionesCont);

    return div;
}

export { ItemContactos };