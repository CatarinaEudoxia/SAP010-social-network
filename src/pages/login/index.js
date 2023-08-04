export default () => {
  const designLogin = document.createElement("link");
  designLogin.rel = "stylesheet";
  designLogin.href = "pages/login/style.css";
  document.head.appendChild(designLogin);

  // Função para criar o modal
  function createModal() {
      const modal = document.createElement("div");
      modal.classList.add("modal-window");
  
      modal.innerHTML = `    
        <div id="modal" class="modal">
          <div class="modal-content">
            <h1>Esqueci Minha Senha</h1>
            <form id="request-form">
              <input type="email" id="modal-email" name="email" placeholder="E-mail" required>
              <button type="button" id="btn-close">X</button>
              <button type="submit" id="btn-enter">Enviar e-mail de recuperação</button>
            </form>
          </div>
        </div>
      `;
  
      const btnClose = modal.querySelector("#btn-close");
      btnClose.addEventListener("click", () => {
        modal.style.display = "none"; // Oculta o modal ao clicar no botão "Fechar"
      });
  
      const requestForm = modal.querySelector("#request-form");
      requestForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário
        const emailInput = requestForm.querySelector("#modal-email");
        const email = emailInput.value;
        // Aqui você pode fazer algo com o e-mail digitado, como enviar uma solicitação para redefinir a senha.
        console.log("E-mail digitado:", email);
        modal.style.display = "none"; // Oculta o modal após o envio do formulário (simulação)
      });
  
      return modal;
    }
  
    const containerLogin = document.createElement("div");
    containerLogin.classList.add("container");
  
    containerLogin.innerHTML = `
      <header>
        <img src="pages/assets/logotipo.png" alt="Logotipo da tela de login">
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
  
    const btnModal = containerLogin.querySelector("#forget-password");
  
    btnModal.addEventListener("click", () => {
      const modal = createModal(); // Cria um novo modal sempre que o botão for clicado
      containerLogin.appendChild(modal);
      modal.style.display = "flex"; // Torna o modal visível ao clicar no botão "Esqueci minha senha"
    });
  
    const banana = containerLogin.querySelector("#email");
    console.log(banana);
  
    return containerLogin;
  };

  /*const btnEntrar = containerLogin.querySelector("#btn-google");
  btnEntrar.addEventListener("click", () => {
    window.location.hash = "#abacaxi";
    console.log(window.location)
  })*/  