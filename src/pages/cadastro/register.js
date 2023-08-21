import { registerAccount } from "../../lib";

export default () => {
    const designLogin = document.createElement("link");
    designLogin.rel = "stylesheet";
    designLogin.href = "pages/cadastro/register.css";
    document.head.appendChild(designLogin);

    const containerRegister = document.createElement("div");
    containerRegister.classList.add("container");

    containerRegister.innerHTML = `
        <header>
        <img src= "pages/assets/logotipo.png" alt="Logotipo da tela de cadastro">
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

    `

   /* function validarFormulario() {
        const userPassword = document.querySelector("#senha").value;
        const confirmPassword = document.querySelector("#confirm-password").value;

        if (userPassword !== confirmPassword) {
            alert('As senhas não correspondem. Por favor, tente novamente.');
            return false;
        }
        return true;

    };*/

    const batata = containerRegister.querySelector("#criar-conta")
    batata.addEventListener("click", registerAccount);
    
    return containerRegister;
}

