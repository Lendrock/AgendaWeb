import { Contactos } from "../../secctions/contactos/Contactos.js";
let container = document.getElementById("ccontainer");

let viewContacts = function () {
    container.innerHtml = "";
    container.appendChlind(Contactos());
}

let viewNewContacts = function (){
    container.innerHtml = "";
    container.appendChlind(viewNewContacts());
}

export {viewContacts, viewNewContacts}