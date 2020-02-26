import './index.css';
import image from './assets/webpack.png';
let el = document.getElementById('container');


const img = document.createElement('img');
img.src = image;
document.body.appendChild(img);

document.write(()=>console.log('Hello console'));//arrow function should be converted by babel in npm run build to older javascript
