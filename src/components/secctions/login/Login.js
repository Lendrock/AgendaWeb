let login = function(onLogin){
    let loginContainer = document.createElement("section");
    loginContainer.className = "login-view"; 
    
    let h3 = document.createElement("h3");
    h3.innerHTML = "Login";

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";

    let button = document.createElement("button");
    button.innerHTML = "Iniciar Sesion";

    button.addEventListener("click", function () {
    window.location.href = "src/app.html";
});

    loginContainer.appendChild(h3);
    loginContainer.appendChild(user);
    loginContainer.appendChild(password);
    loginContainer.appendChild(button);
    
    return loginContainer;
}
export {login};