export default () => {
  function openModal() {
    const aboutUs = document.createElement("div");
    aboutUs.classList.add("modal-window");

    aboutUs.innerHTML =  `
    <div class="janela-modal" id="janela-modal">
        <div class="modal">    

        <h1>WLAMEL BOOK'S</h1>  
        <p> Aqui você poderá compartilhar suas percepções, observações e curiosidades dos seus livros, e incentivar a leitura para outras pessoas num espaço virtual seguro. </p>
        <br>
        <img src="pages/assets/booksIcon.png" id="img-book" alt="Icon de livros">
        <br>
        <p>Desenvolvido por&nbsp;
        <a href="https://github.com/CatarinaEudoxia"> Catarina E. Ferreira&nbsp</a>
        e&nbsp
        <a href="https://github.com/Cibellimonte"> Cibelli M. do Monte&nbsp</a>
        &nbsp
        </p>
        
        <button class="bnt-back" id="btn-back">X</button>
       </div>
    </div>   

    `
    const btnBack = aboutUs.querySelector("#btn-back");
    btnBack.addEventListener("click", () => {
      aboutUs.style.display = "none";
    })
    return aboutUs
  }

  const designHome = document.createElement("link");
  designHome.rel = "stylesheet";
  designHome.href = "pages/home/style.css";
  document.head.appendChild(designHome);


  const containerHome = document.createElement("div");
  containerHome.classList.add("container");

    containerHome.innerHTML = `
  <header>
  <img src="pages/assets/logotipo.png" alt="Logotipo da rede social Wlamel Books">
  </header>

  <div class="container-home"> 
    <section class="container-home" id="home">
      <button onclick="enterHome()" id="btn-entrar">Entrar</button>
      <button id="btn-register">Cadastre-se</button> 
      <button id="btn-us">Sobre Nós</button>

    </section>
  </div>
  
  `
  const btnUs = containerHome.querySelector("#btn-us");
  btnUs.addEventListener("click", () => {
    const modal = openModal(); 
    containerHome.appendChild(modal);
    modal.style.display = "flex";
  })
  

  return containerHome;
}