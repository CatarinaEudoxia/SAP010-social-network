export default () => {
    const containerHome = document.createElement("div");
    containerHome.classList.add("container");

    function enterHome () {
      window.location.href = "index.html#login";
    }

    containerHome.innerHTML = `
    <header>
    <img src="pages/assets/logotipo.png" alt="Logotipo da rede social Wlamel Books">
    </header>

    <div class="container-home"> 
      <section class="container-home" id="home">
        <button onclick="enterHome()" id="btn-entrar">Entrar</button>
        <button id="btn-register">Cadastre-se</button> 
      </section>
    </div>
    <footer><strong>Desenvolvido por Catarina E. Ferreira e Cibelli Monte, alunas da turma SAP010 Laboratória</strong></footer>
    `
    return containerHome;
}
