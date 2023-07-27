export default () => {
    const containerLogin = document.createElement("div");
    containerLogin.classList.add("container");

    containerLogin.innerHTML = `
        <header>
        <img src= "pages/assets/logotipo.png" alt="Logotipo da tela de login">
        </header>
    
        <div class="content">
            <form id="login-form">
                <input type="email" id="email" name="email" placeholder="E-mail" required>

                <input type="password" id="senha" name="senha" placeholder="Senha" required> 

                <a href="" id="esqueceu-senha">Esqueci minha senha</a>

                <button type="submit" id="btn-entrar">Entrar</button>
            </form>
    
            <button id="btn-google">Entrar com o Google</button>    
        </div>

    `

const designLogin = document.createElement("link");
designLogin.rel = "stylesheet";
designLogin.href = "pages/login/style.css";

document.head.appendChild(designLogin);

const banana = containerLogin.querySelector("#email");
console.log(banana);

return containerLogin;
}

