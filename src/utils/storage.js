
const CONTACTS_KEY = 'agenda_contactos';
const TASKS_KEY = 'agenda_tareas';

/**
 * Guarda la lista de contactos en el LocalStorage 
 * @param {Array} contactos - Lista de contactos a guardar 
 */
export function saveContactsToStorage(contactos) {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contactos));
}

/**
 * Obtiene la lista de contactos desde el LocalStorage
 * @returns {Array} Lista de contactos, o array vacío si no hay datos
 */
export function getContactsFromStorage() {
    return JSON.parse(localStorage.getItem(CONTACTS_KEY)) || [];
}

/**
 * Funciones equivalentes para Tareas
 */
export function saveTasksToStorage(tareas) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tareas));
}

export function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
}