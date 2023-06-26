import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App';

AOS.init({
  once: false
});
window.addEventListener('load', AOS.refresh);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

