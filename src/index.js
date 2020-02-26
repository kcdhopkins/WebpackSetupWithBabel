import './index.css';
import image from './assets/webpack.png';
let el = document.getElementById('container');
el.value = "Hello world";

const img = document.createElement('img');
img.src = image;
document.body.appendChild(img);
