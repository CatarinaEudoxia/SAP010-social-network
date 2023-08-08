
export default () => {
    // Criar o elemento <link> para importar o CSS
    const designFeed = document.createElement("link");
    designFeed.rel = "stylesheet";
    designFeed.href = "pages/feed/style.css";
    document.head.appendChild(designFeed);
  

     // Função para criar o modal
    function createModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal-window");

    modal.innerHTML = `    
      <div id="modal" class="modal">
        <div class="modal-content">
         <select><select>
         <select><select>
         <textarea></textearea>
         <button id"publish">Publicar</button>
         <button id"btn-close">X</button>
    `;

    const btnClose = modal.querySelector("#btn-close");
    btnClose.addEventListener("click", () => {
      modal.style.display = "none"; // Oculta o modal ao clicar no botão "Fechar"
    });

    return modal;
  }
 const containerFeed = document.createElement("div");
    containerFeed.classList.add("container");
  
    containerFeed.innerHTML = `
      <header>
        <img src="pages/assets/logotipo.png" alt="Logotipo do feed">
      </header>
      <div id="welcome-user>
        <p>Seja Bem-Vindo(a) ${nome}!</p>
      </div>

      <div id="your-content">
        <button id="your-publication">Qual livro você gostaria de compartilhar hoje?</button>
      </div>

      <div class="feed">
        
      </div>
    `;
  
    const btnModal = containerFeed.querySelector("#your-publication");
  
    btnModal.addEventListener("click", () => {
      const modal = createModal(); // Cria um novo modal sempre que o botão for clicado
      containerFeed.appendChild(modal);
      modal.style.display = "flex"; // Torna o modal visível ao clicar no botão "Esqueci minha senha"
    });
  
    return containerFeed;
  };

  
  
  