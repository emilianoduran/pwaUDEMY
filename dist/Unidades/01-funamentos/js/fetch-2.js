"use strict";

console.log('%c=== File:/ Fetch II ===', "	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold"); // URL: 'https://reqres.in/api/users?page=2'

var URLGet = 'https://reqres.in/api/users?page=2'; // código en detalle.
// fetch(URLGet).then(res => {
// 	// respuesta tiene que ser convertida a json : Este json devuelve una promesa también
// 	res.json().then(console.log);
// });
// código simplificado

fetch(URLGet).then(function (res) {
  return res.json();
}).then(console.log); // ejercicio adicional // trae una parte del contenido del curso y lo inyecta en el html
// const main = document.querySelector('.main-container');
// const udemyContainer = document.getElementById('pageUdemy');
// const proxyurl = 'https://cors-anywhere.herokuapp.com/';
// const url = 'https://www.udemy.com/course/aplicaciones-web-progresivas/';
// fetch(proxyurl + url)
// 	.then(res => res.text())
// 	.then(html => {
// 		console.log(html);
// 		let template = html;
// 		udemyContainer.innerHTML = template;
// 	})
// 	.then(() => {
// 		select();
// 	});
// const select = () => {
// 	let summary = document.querySelector('.ud-component--clp--curriculum');
// 	console.log(summary);
// 	let template = summary;
// 	let container = document.createElement('div');
// 	container.setAttribute('class', 'container-summary');
// 	main.removeChild(udemyContainer);
// 	main.appendChild(template);
// };