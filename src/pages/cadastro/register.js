import { registerAccount } from '../../lib';

export default () => {
  const designLogin = document.createElement('link');
  designLogin.rel = 'stylesheet';
  designLogin.href = 'pages/cadastro/register.css';
  document.head.appendChild(designLogin);

  const containerRegister = document.createElement('div');
  containerRegister.classList.add('container');

  containerRegister.innerHTML = `
    <header>
      <button id="return-Home"></button> 
      <img src="pages/assets/logotipo.png" alt="Logotipo da tela de cadastro">
    </header>

    <div class="content">
      <form id="register-form" method="post">
        <input type="text" id="your-name" name="name" placeholder="Nome Completo" required>
        <input type="email" id="email" name="email" placeholder="E-mail" required>
        <input type="password" id="password" name="password" placeholder="Senha" required>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirmar senha" required>
        <button type="submit" id="criar-conta">Criar conta</button>
      </form>
    </div>
  `;

  containerRegister.querySelector('#return-Home').addEventListener('click', () => {
    window.history.back();
  });

  const registerForm = containerRegister.querySelector('#register-form');

  function validarFormulario() {
    const passwordInput = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (passwordInput !== confirmPassword) {
      alert('As senhas não correspondem. Por favor, tente novamente.');
      return false;
    }

    if (passwordInput.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return false;
    }

    if (!/[A-Z]/.test(passwordInput) || !/[a-z]/.test(passwordInput)) {
      alert('A senha deve conter pelo menos uma letra maiúscula e uma minúscula.');
      return false;
    }

    if (!/[0-9]/.test(passwordInput)) {
      alert('A senha deve conter pelo menos um número.');
      return false;
    }
    // Se a senha atender a todos os requisitos, retorne true
    return true;
  }

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário
    const emailInput = registerForm.querySelector('#email');
    const passwordInput = registerForm.querySelector('#password');
    const email = emailInput.value;
    const password = passwordInput.value;

    if (validarFormulario()) {
      registerAccount(email, password); // Chama a função de registro de conta
    }
  });

  return containerRegister;
};
