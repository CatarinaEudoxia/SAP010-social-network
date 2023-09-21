import login from '/pages/login/login';
import register from '/pages/cadastro/register';
import home from '/pages/home/home';
import feed from '/pages/feed/feed'; 

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    const hash = window.location.hash;
    switch (hash) {
      case '#home':
        main.appendChild(home());
        break;
      case '#login':
        main.appendChild(login());
        break;
      case '#register':
        main.appendChild(register());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      default:
        main.appendChild(home());
    }
  });
};

window.addEventListener('load', () => {
  init();
  window.location.hash = '';
  main.appendChild(home());
});
