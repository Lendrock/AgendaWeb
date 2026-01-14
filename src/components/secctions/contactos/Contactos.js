import { ItemContactos } from "../../common/itemContacto/ItemContacto.js";
import { ContactList } from "./db.js";
let Contactos = () => {
    let sectionnContactos = document.createElement("section");
    sectionnContactos.className = "contactos";
    
    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionnContactos.appendChild(h2);

    ContactList.forEach((contact) => {
        sectionnContactos.appendChild(ItemContactos("person.svg",
             contact.nombre, contact.telefono));
    });
    return sectionnContactos;
}

export {Contactos}