"use strict";

console.log('%c=== File:/ Fetch VI ===', "	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold");
var main = document.querySelector('.main-container');
var head = document.querySelector('head');
var linkActual = document.querySelector('link');
console.log(head); // Elimina el contenido principal del html y elimina los estilos del index.html

document.body.removeChild(main);
document.head.removeChild(linkActual); // crea la etiqueta app y le agrega la clase root
// Dentro de esta etiqueta se crean los componentes.

var root = document.createElement('app');
root.setAttribute('class', 'root');
document.body.appendChild(root); // Crea el elemento link para inyectarlo en el head cuando la promesa que trae el css responde.

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet'); // crear script

var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
document.body.appendChild(script);
var component = {
  css: './components/section/section.component.css',
  html: './components/section/section.component.html',
  js: './components/section/section.component.js'
};
var jsCode;
fetch(component.html).then(function (res) {
  if (res.ok) {
    res.text().then(function (html) {
      var template = "".concat(html); // Add Template to body

      root.innerHTML = template;
    });
  } else {
    throw new Error("RUTA >>>[ ".concat(component.html, " ]<<< No es una ruta v\xE1lida para enlazar el HTML"));
  }
});
fetch(component.css).then(function (res) {
  if (res.ok) {
    res.blob().then(function (css) {
      var urlCSS = URL.createObjectURL(css);
      link.setAttribute('href', urlCSS);
      head.appendChild(link);
    });
  } else {
    throw new Error("RUTA >>>| ".concat(component.css, " |<<< No es una ruta v\xE1lida para enlazar el CSS"));
  }
});
fetch(component.js).then(function (res) {
  if (res.ok) {
    res.blob().then(function (js) {
      var urlJS = URL.createObjectURL(js);
      script.setAttribute('src', urlJS);
    });
  } else {
    throw new Error("RUTA >>>| ".concat(component.js, " |<<< No es una ruta v\xE1lida para enlazar el JS"));
  }
});