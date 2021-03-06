console.log(
	'%c=== File:/ Fetch III ===',
	"	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold",
);
const URLPost = 'https://reqres.in/api/user';
let user = {
	name: 'Emiliano',
	lastName: 'Durán',
	age: 34,
};
// código en detalle.
// fetch(URLGet).then(res => {
// 	// respuesta tiene que ser convertida a json : Este json devuelve una promesa también
// 	res.json().then(console.log);
// });

// código simplificado
fetch(URLPost, {
	method: 'POST', // PUT | DELETE
	body: JSON.stringify(user),
	headers: {
		'Content-Type': 'application/json',
	},
})
	.then(res => res.json())
	.then(data => {
		let { name, lastName, age } = data;
		console.log(name, lastName, age);
	})
	.catch(console.error);
