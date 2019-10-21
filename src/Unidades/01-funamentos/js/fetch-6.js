console.log(
	'%c=== File:/ Fetch VI ===',
	"	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold",
);

const main = document.querySelector('.main-container');
const head = document.querySelector('head');
const linkActual = document.querySelector('link');
console.log(head);
// Elimina el contenido principal del html y elimina los estilos del index.html
document.body.removeChild(main);
document.head.removeChild(linkActual);

// crea la etiqueta app y le agrega la clase root
// Dentro de esta etiqueta se crean los componentes.
const root = document.createElement('app');
root.setAttribute('class', 'root');
document.body.appendChild(root);

// Crea el elemento link para inyectarlo en el head cuando la promesa que trae el css responde.
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');

// crear script
const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
document.body.appendChild(script);
const component = {
	css: './components/section/section.component.css',
	html: './components/section/section.component.html',
	js: './components/section/section.component.js',
};

let jsCode;

fetch(component.html).then(res => {
	if (res.ok) {
		res.text().then(html => {
			const template = `${html}`;
			// Add Template to body
			root.innerHTML = template;
		});
	} else {
		throw new Error(`RUTA >>>[ ${component.html} ]<<< No es una ruta válida para enlazar el HTML`);
	}
});

fetch(component.css).then(res => {
	if (res.ok) {
		res.blob().then(css => {
			const urlCSS = URL.createObjectURL(css);
			link.setAttribute('href', urlCSS);
			head.appendChild(link);
		});
	} else {
		throw new Error(`RUTA >>>| ${component.css} |<<< No es una ruta válida para enlazar el CSS`);
	}
});
fetch(component.js).then(res => {
	if (res.ok) {
		res.blob().then(js => {
			const urlJS = URL.createObjectURL(js);
			script.setAttribute('src', urlJS);
		});
	} else {
		throw new Error(`RUTA >>>| ${component.js} |<<< No es una ruta válida para enlazar el JS`);
	}
});
