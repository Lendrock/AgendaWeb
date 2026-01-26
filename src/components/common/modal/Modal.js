const mostrarConfirmacion = (mensaje) => {
    return new Promise((resolve) => {
        const overlay = document.createElement("div");
        overlay.className = "modal-overlay";

        overlay.innerHTML = `
            <div class="modal-content">
                <p>${mensaje}</p>
                <div class="modal-buttons">
                    <button id="btn-confirm-si" class="btn-modal btn-confirm">Aceptar</button>
                    <button id="btn-confirm-no" class="btn-modal btn-cancel">Cancelar</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        overlay.querySelector("#btn-confirm-si").onclick = () => {
            overlay.remove();
            resolve(true);
        };

        overlay.querySelector("#btn-confirm-no").onclick = () => {
            overlay.remove();
            resolve(false);
        };
    });
};

export { mostrarConfirmacion };