export default () => {
    const containerUs = document.createElement("div");
    containerLogin.classList.add("container");

    containerUs.innerHTML = `
        <div class="content">
            <p> Aqui você podera compartilhar suas percepções, observações e curiosidades dos seus livros, e incentivar a leitura para outros num espaço virtual seguro. </p>
            <br>
            <img src="pages/assets/booksIcon.png" alt="Icon de livros">
            <button id="btn-back"></button>    
        </div>
    `
/*const aboutUs = containerUs.querySelector(".container");
console.log(aboutUs);
    return containerLogin;*/
}
