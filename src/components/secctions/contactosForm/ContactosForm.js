import { ContactList } from "../contactos/db.js";
function ContactoForm(funcion){

    let form = document.createElement("form");
    form.className = "new-contact-form";

    //Titulo
    let title = document.createElement("h2");
    title.textContent = "Nuevo Contacto";
    form.appendChild(title);

    //Campo Nombre

    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre: ";
    labelNombre.htmlFor = "nombre";
    
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    inputNombre.name = "nombre";
    inputNombre.required = "true";
    inputNombre.placeholder = "Ingrese el nombre";

    //Campo Telefono
    let labelTelefono = document.createElement("label");
    labelTelefono.textContent = "Telfono: ";
    labelTelefono.htmlFor = "Telefono";

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.id = "telefono";
    inputTelefono.name = "telefono";
    inputTelefono.required = "true";
    inputTelefono.placeholder = "Ej: 123456789";

    //Botones
    let btnSummit = document.createElement("button");
    btnSummit.type = "submit"
    btnSummit.textContent = "Guardar";

    let btnCancel = document.createElement("button");
    btnCancel.type = "button"
    btnCancel.textContent = "Cancelar";

    form.appendChild(labelNombre);
    form.appendChild(inputNombre);
    form.appendChild(labelTelefono);
    form.appendChild(inputTelefono);
    form.appendChild(btnSummit);
    form.appendChild(btnCancel);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let contacto = {
        nombre: inputNombre.value,
        telefono: inputTelefono.value
    };

    console.log(contacto);
    ContactList.push(contacto);
    });

    return form;
}
export {ContactoForm};