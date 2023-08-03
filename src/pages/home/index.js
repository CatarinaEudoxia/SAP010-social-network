export default () => {
  const containerHome = document.createElement("div");
  containerHome.classList.add("container");

  /*function enterHome () {
    window.location.href = "index.html#login";
  }*/

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
  function openModal() {
    return `
    <div onclick="abrirModal()" class="btn-us">Sobre Nós</div>
    <div class="janela-modal" id="janela-modal">
        <div class="modal">    

      <h1>WLAMEL BOOK'S</h1>  
      <p> Aqui você poderá compartilhar suas percepções, observações e curiosidades dos seus livros, e incentivar a leitura para outros num espaço virtual seguro. </p>
      <br>
      <img src="pages/assets/booksIcon.png" alt="Icon de livros">
      <p>Desenvolvido por&nbsp;
      <a href="https://github.com/CatarinaEudoxia"> Catarina E. Ferreira&nbsp</a>
      e&nbsp
      <a href="https://github.com/Cibellimonte"> Cibelli M. do Monte&nbsp</a>
      e&nbsp
      </p>
      
      <button class="bnt-back" id="btn-back">X</button>
      
    `
  }

  const designHome = document.createElement("link");
  designHome.rel = "stylesheet";
  designHome.href = "pages/home/style.css";

  document.head.appendChild(designHome);

 
  function abrirModal() {
    const modal = document.getElementById("janela-modal");
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
      if(e.target.id =='btn-back' || e.target.id == 'janela-modal' ){
        modal.classList.remove('abrir')
      }
    })
  }

  return containerHome;
}