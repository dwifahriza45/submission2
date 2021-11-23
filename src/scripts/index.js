import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/app-bar';
import './component/footer-bar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  container: document.querySelector('#container'),
  hero: document.querySelector('#hero'),
  content: document.querySelector('#mainContent'),
});

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#mainContent').focus();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
