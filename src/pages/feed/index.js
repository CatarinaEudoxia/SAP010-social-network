
export default () => {
    // Criar o elemento <link> para importar o CSS
    const designFeed = document.createElement("link");
    designFeed.rel = "stylesheet";
    designFeed.href = "pages/feed/style.css";
    document.head.appendChild(designFeed);
  
    // Criar o elemento do container do login
    const containerFeed = document.createElement("div");
    containerFeed.classList.add("container");
  
    containerFeed.innerHTML = `
      <header>
        <img src="pages/assets/logotipo2.png" alt="Logotipo da tela de feed">
      </header>
  
    `;
  
  
    const banana = containerLogin.querySelector("#email");
    console.log(banana);
  
    return containerFeed;
  }
  