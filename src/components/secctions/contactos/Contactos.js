import { ItemContactos } from "../../common/itemContacto/ItemContacto.js";
let Contactos = () => {
    let sectionnContactos = document.createElement("section");
    sectionnContactos.className = "contactos";
    
    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionnContactos.appendChild(h2);

sectionnContactos.appendChild(ItemContactos("user2.svg", "Jossue Fuentes", "123456789"));
sectionnContactos.appendChild(ItemContactos("user2.svg", "Jossue Fuentes", "123456789"));
sectionnContactos.appendChild(ItemContactos("user2.svg", "Jossue Fuentes", "123456789"));
sectionnContactos.appendChild(ItemContactos("user2.svg", "Jossue Fuentes", "123456789"));
sectionnContactos.appendChild(ItemContactos("user2.svg", "Jossue Fuentes", "123456789"));
sectionnContactos.appendChild(ItemContactos("user2.svg", "Jossue Fuentes", "123456789"));
sectionnContactos.appendChild(ItemContactos("user2.svg", "Jossue Fuentes", "123456789"));
sectionnContactos.appendChild(ItemContactos("user2.svg", "Jossue Fuentes", "123456789"));
sectionnContactos.appendChild(ItemContactos("user2.svg", "Jossue Fuentes", "123456789"));

    return sectionnContactos;
}

export {Contactos}