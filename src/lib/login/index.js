export default () => {
    const containerLogin = document.createElement("div");

    const templateLogin = `
        <header></header>
    
        <div class="container">
            <form id="login-form">
                <input type="email" id="email" name="email" placeholder="E-mail" required>

                <input type="password" id="senha" name="senha" placeholder="Senha" required> 

                <a href="#" id="esqueceu-senha">Esqqueci minha senha</a>

                <button type="submit" id="btn-entrar">Entrar</button>
            </form>

            <button id="btn-google">Entrar com o Google</button>    
        </div>

    `;
    
    containerLogin.innerHTML = templateLogin;

    return containerLogin;
}

