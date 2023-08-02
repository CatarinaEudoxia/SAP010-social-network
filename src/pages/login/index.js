export default () => {
    const designLogin = document.createElement("link");
    designLogin.rel = "stylesheet";
    designLogin.href = "pages/login/style.css";
    document.head.appendChild(designLogin);
  
    const containerLogin = document.createElement("div");
    containerLogin.classList.add("container");
  
    containerLogin.innerHTML = `
      <header>
        <img src= "pages/assets/logotipo.png" alt="Logotipo da tela de login">
      </header>
      
      <div class="content">
        <form id="login-form">
          <input type="email" id="email" name="email" placeholder="E-mail" required>
          <input type="password" id="password" name="password" placeholder="Senha" required> 
          <button type="submit" id="btn-entrar">Entrar</button>
        </form>
  
        <button id="forget-password">Esqueci minha senha</button>
  
        <button id="btn-google">Entrar com o Google</button> 
      </div>
    `;

    function createModal() {
        const modal = document.createElement("div");
        modal.classList.add("modal-window");
      
        modal.innerHTML = `    
          <div id="modal" class="modal">
            <div class="modal-content">
              <h2>Esqueci Minha Senha</h2>
              <form id="request-form">
                 <input type="email" id="modal-email" name="email" placeholder="E-mail" required>
                 <button type="button" id="btn-close">Fechar</button>
                 < button type="submit" id="btn-enter">Enviar</button>
              </form>
            </div>
          </div>
        `;
    
        return modal;
      }
  
    const banana = containerLogin.querySelector("#email");
    console.log(banana);
  
    return containerLogin;
  }
  