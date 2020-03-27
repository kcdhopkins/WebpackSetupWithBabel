import "./index.css";

const el = document.getElementById("container");
const div = document.createElement("div");
const h1 = document.createElement("h1");

h1.appendChild(document.createTextNode("Hello World"));
div.appendChild(h1);

el.appendChild(div);
