let Usuario = () => {

    let sectionUsuario = document.createElement("section");
    sectionUsuario.className = "usuario";

    let header = document.createElement("div");
    header.className = "usuario-header";

    let h2 = document.createElement("h2");
    h2.textContent = "Mi perfil";

    header.appendChild(h2);

    let card = document.createElement("div");
    card.className = "usuario-card";

    let avatar = document.createElement("div");
    avatar.className = "usuario-avatar";

    let img = document.createElement("img");
    img.src = "assets/icons/person.svg";
    img.alt = "Usuario";

    avatar.appendChild(img);

    let info = document.createElement("div");
    info.className = "usuario-info";

    const crearDato = (label, valor) => {
        let p = document.createElement("p");

        let strong = document.createElement("strong");
        strong.textContent = label + ": ";

        let span = document.createElement("span");
        span.textContent = valor;

        p.appendChild(strong);
        p.appendChild(span);

        return p;
    };

    info.appendChild(crearDato("Alias", "Lendrock"));
    info.appendChild(crearDato("Primer número", "3160-4654"));
    info.appendChild(crearDato("Nombre completo", "Leandro Maldonado"));
    info.appendChild(crearDato("Ubicación", "Guatemala"));
    info.appendChild(crearDato("Tipo familiar", "Personal"));

    card.appendChild(avatar);
    card.appendChild(info);

    sectionUsuario.appendChild(header);
    sectionUsuario.appendChild(card);

    return sectionUsuario;
};

export { Usuario };
