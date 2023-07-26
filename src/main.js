
import home from "./lib/pages/home/index.js";
import login from "./lib/pages/login/index.js";
import cadastro from "./lib/pages/cadastro/index.js";
// aqui exportaras las funciones que necesites

const main = document.querySelector("#root")

const init = () => {
  main.innerHTML = ""; // Limpar o conteúdo do elemento principal
  main.appendChild(login()); // Carregar a página de login
};

window.addEventListener("load", () => {
  init();
});

/*export default dom = () => {

window.addEventListener("load", () => {
  main.appendChild(login());
  init();
});
}*/
