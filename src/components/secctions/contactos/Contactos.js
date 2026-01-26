import { ItemContactos } from "../../common/itemContacto/ItemContacto.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../../utils/storage.js";
import { Button } from "../../common/button/Button.js";
import { ContactoForm } from "../contactosForm/ContactosForm.js";
import { mostrarConfirmacion } from "../../common/modal/Modal.js";

let Contactos = () => {
    let ContactList = getContactsFromStorage(); 

    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    const renderList = () => {
        sectionContactos.innerHTML = "";
        
        let sectionHeader = document.createElement("div");
        sectionHeader.className = "contactos-header";

        let h2 = document.createElement("h2");
        h2.textContent = "Contactos";

        let btnNuevoContacto = Button(
            "",
            "newContact",
            "add.svg",
            function () {
                sectionContactos.innerHTML = "";
                sectionContactos.appendChild(ContactoForm());
            }
        );
        btnNuevoContacto.classList.add("btn-minimalist");

        sectionHeader.appendChild(h2);
        sectionHeader.appendChild(btnNuevoContacto);
        sectionContactos.appendChild(sectionHeader);

        // Ordenamiento alfabético
        ContactList.sort((a, b) => a.nombre.localeCompare(b.nombre));

        // Generación de items
        ContactList.forEach((contact, index) => {
            sectionContactos.appendChild(ItemContactos(
                "person.svg",
                contact.nombre,
                contact.telefono,

                // Editar
                async function () {
                    const confirmar = await mostrarConfirmacion(`¿Deseas editar a "${contact.nombre}"?`);
                    if (confirmar) {
                        sectionContactos.innerHTML = "";
                        sectionContactos.appendChild(ContactoForm(contact, index));
                    }
                },

                // Eliminar
                async function () {
                    const confirmar = await mostrarConfirmacion(`¿Borrar contacto: "${contact.nombre}"?`);
                    if (confirmar) {
                        ContactList.splice(index, 1);
                        saveContactsToStorage(ContactList); 
                        renderList();
                    }
                }
            ));
        });
    };

    renderList();
    return sectionContactos;
}

export { Contactos };