import { ItemContactos } from "../../common/itemContacto/ItemContacto.js";
import { ContactList } from "./db.js";
import { Button } from "../../common/button/Button.js";
import { ContactoForm } from "../contactosForm/ContactosForm.js";
import { mostrarConfirmacion } from "../../common/modal/Modal.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    // Cabecera
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

    // Renderizado de lista
    const renderList = () => {
        sectionContactos.innerHTML = "";
        
        // Creamos la cabecera de nuevo para asegurar los eventos
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

                // Apartado: Editar
                async function () {
                    const confirmar = await mostrarConfirmacion(`¿Deseas editar a "${contact.nombre}"?`);
                    if (confirmar) {
                        sectionContactos.innerHTML = "";
                        sectionContactos.appendChild(ContactoForm(contact, index));
                    }
                },

                // Apartado: Eliminar
                async function () {
                    const confirmar = await mostrarConfirmacion(`¿Borrar contacto: "${contact.nombre}"?`);
                    if (confirmar) {
                        ContactList.splice(index, 1);
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