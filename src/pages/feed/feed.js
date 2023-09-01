import { logoutAccount, publishPost, getPosts } from '../../lib';

export default () => {
  // Criar o elemento <link> para importar o CSS
  const designFeed = document.createElement('link');
  designFeed.rel = 'stylesheet';
  designFeed.href = 'pages/feed/feed.css';
  document.head.appendChild(designFeed);



  // Função para criar o modal
  function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal-window');

    modal.innerHTML = `    
     <div class="modal-content">

      <label for="genre">Gênero:</label> 
        <select id="genre" name="genre">
          <option value="fantasy">Fantasia</option>
          <option value="sci-fi">Ficção Científica</option>
          <option value="romance">Romance</option>
          <option value="mystery">Mistério</option>
          <option value="thriller">Suspense</option>
          <option value="horror">Terror</option>
          <option value="adventure">Aventura</option>
          <option value="historical">Histórico</option>
          <option value="non-fiction">Não Ficção</option>
          <option value="self-help">Autoajuda</option>
          <option value="biography">Biografia</option>
          <option value="comic">História em Quadrinhos</option>
          <option value="drama">Drama</option>
          <option value="poetry">Poesia</option>
          <option value="children">Literatura Infantil</option>
          <option value="classic">Clássico</option>
          <option value="sci-fi-fantasy">Ficção Científica e Fantasia</option>
          <option value="historical-fiction">Ficção Histórica</option>
          <option value="philosophy">Filosofia</option>
       </select>
       <label for="age">Idade:</label>
       <select id="age" name="age">
          <option value="livre">Livre</option>
          <option value="maior-10">Maior de 10 anos</option>
          <option value="maior-12">Maior de 12 anos</option>
          <option value="maior-14">Maior de 14 anos</option>
          <option value="maior-16">Maior de 16 anos</option>
          <option value="maior-18">Maior de 18 anos</option>
        </select> 

        <textarea id="book-name" placeholder="Nome do livro"></textarea> 

        <textarea id="postContent" name="postContent" placeholder="Que Leitura você gostaria de compartilhar..."></textarea>  
        <button id="btn-publish">Publicar</button>
        <button id="btn-close">X</button>

      </div>
    `;

    const btnClose = modal.querySelector('#btn-close');
    btnClose.addEventListener('click', () => {
      modal.style.display = 'none'; // Oculta o modal ao clicar no botão 'Fechar'
    });

    const btnPublish = modal.querySelector('#btn-publish');
    btnPublish.addEventListener('click', () => {
      const book = modal.querySelector('#book-name').value;
      const userName = 'Banana';
      const genre = modal.querySelector('#genre').value;
      const age = modal.querySelector('#age').value;
      const content = modal.querySelector('#postContent').value;

      publishPost(Date.now(), book, userName, genre, age, content)
        .then(createPost);

      modal.style.display = 'none'; // Oculta o modal após a publicação
    });

    return modal;
  }

  const containerFeed = document.createElement('div');
  containerFeed.classList.add('container');

  containerFeed.innerHTML = `
    <header>
      <button id="log-out"></button>
      <img src="pages/assets/logotipo2.png" alt="Logotipo do feed">
    </header>
    <div id="welcome-user">
      <p>Seja Bem-Vindo(a)!</p>
      
    </div>

    <div id="your-content">
      <button id="your-publication">Qual livro você gostaria de compartilhar hoje?</button>
    </div>

    <div class="feed">
      
    </div>
  `;

  const btnModal = containerFeed.querySelector('#your-publication');

  btnModal.addEventListener('click', () => {
    const modal = createModal(); // Cria um novo modal sempre que o botão for clicado
    containerFeed.appendChild(modal);
    modal.style.display = 'flex'; // Torna o modal visível ao clicar no botão 'Esqueci minha senha'
  });

  containerFeed.querySelector('#log-out').addEventListener('click', logoutAccount);
  const boxForPosts = containerFeed.querySelector('.feed');

  function templatePosts(postContent) {
    return `
    <body>
    <div class="post">
        <div class="post-header">
            <h1 id="book">${postContent.bookName}</h1> 
            <h2 class="user-name">${postContent.nome}</h2>
            <p class="post-details">${postContent.genre} ${postContent.age}</p>
        </div>
        <div class="post-content">
            <p>${postContent.postContent}</p>
        </div>
        <div class="post-actions">
            <button class="like-button">${postContent.likes}</button>
            <button class="delete-button">Delete</button>
            <button class="edit-button">Edit</button>
        </div>
    </div>
    `
  }
  function createPost() {
    getPosts()
      .then((posts) => {
        console.log("oi")
        const allContentPosts = posts.map(postContent => templatePosts(postContent)).join(" ");
        boxForPosts.innerHTML = allContentPosts;

        console.log(posts);
      })
  }

 createPost()
  return containerFeed;
};
