import { loginOn } from '/lib/firebase.js';

export default () => {
  const designLogin = document.createElement('link');
  designLogin.rel = 'stylesheet';
  designLogin.href = 'pages/login/login.css';
  document.head.appendChild(designLogin);

  // Função para criar o modal
  function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal-window');

    modal.innerHTML = `    
          <div class="modal-content">
            <h1>Esqueci Minha Senha</h1>
            <form id="request-form">
              <input type="email" id="modal-email" name="email" placeholder="E-mail" required>
              <button type="button" id="btn-close">X</button>
              <button type="submit" id="btn-enter">Enviar e-mail de recuperação</button>
            </form>
          </div>
      `;

    const btnClose = modal.querySelector('#btn-close');
    btnClose.addEventListener('click', () => {
      modal.style.display = 'none'; // Oculta o modal ao clicar no botão "Fechar"
    });

    const requestForm = modal.querySelector('#request-form');
    requestForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede o comportamento padrão de envio do formulário
      // const emailInput = requestForm.querySelector('#modal-email');
      // const email = emailInput.value;
      modal.style.display = 'none'; // Oculta o modal após o envio do formulário (simulação)
    });
    return modal;
  }

  const containerLogin = document.createElement('div');
  containerLogin.classList.add('container');

  containerLogin.innerHTML = `
      <header>
        <button id="return-Home"></button> 
        <img src="pages/assets/logotipo.png" alt="Logotipo da tela de login">
      </header>
      
      <div class="content">
        <form id="login-form">
          <input type="email" id="email" name="email" placeholder="E-mail" required>
          <input type="password" id="password" name="password" placeholder="Senha" required> 
          <button type="submit" id="btn-entrar">Entrar</button>
        </form>
  
        <button id="forget-password">Esqueci minha senha</button>
  
      </div>
    `;

  containerLogin.querySelector('#return-Home').addEventListener('click', () => {
    window.history.back();
  });

  const btnModal = containerLogin.querySelector('#forget-password');

  btnModal.addEventListener('click', () => {
    const modal = createModal(); // Cria um novo modal sempre que o botão for clicado
    containerLogin.appendChild(modal);
    modal.style.display = 'flex'; // Torna o modal visível ao clicar no botão "Esqueci minha senha"
  });

  const loginAccount = containerLogin.querySelector('#login-form');
  loginAccount.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário
    const emailInput = loginAccount.querySelector('#email');
    const passwordInput = loginAccount.querySelector('#password');
    const email = emailInput.value;
    const password = passwordInput.value;

    loginOn(email, password); // Chama a função de registro de conta
  });

  return containerLogin;
};
