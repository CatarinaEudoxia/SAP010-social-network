
//import home from "./pages/home/index.js";
import login from "./pages/login/index.js";
import register from "./pages/cadastro/index.js";
import home from "./pages/home/index.js";
// aqui exportaras las funciones que necesites

const main = document.querySelector("#root")

const init = () => {
  main.innerHTML = ""; // Limpar o conteúdo do elemento principal
  main.appendChild(home()); // Carregar a página de login
};

window.addEventListener("load", () => {
  init();
});

/*const init = () => {
  window.addEventListener("hashchange", ()=> {
    main.innerHTML = "";
    
  })
}*/

