// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.co/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/

// Resolución de la tarea #1
const urlGET = 'https://swapi.co/api/people/1/';

fetch(urlGET).then(res => {
	if (res.ok) {
		console.log(
			'%c=== File:/ TAREA I ===',
			"	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold",
		);
		let people = res.json().then(people => {
			console.log(people);
			console.log(people.name);
			console.log(people.gender);
		});
	}
});

// Resolución de la tarea #2

// ==============================================
// Ejercicio #2
// ==============================================
/*
    Similar al ejercicio anterior... haga un llamado a la misma api
    (puede reutilizar el código )
    https://swapi.co/api/people/1/
    
    Pero con el nombre y el género, haga un posteo
    POST a: https://reqres.in/api/users
    
    Imprima en consola el objeto y asegúrese que tenga
    el ID y la fecha de creación del objeto
    */

const urlPOST = 'https://reqres.in/api/users';

const urlGET2 = 'https://swapi.co/api/people/1/';

const PostPeople = people => {
	let addPeople = {
		name: people.name,
		gender: people.gender,
	};

	return fetch(urlPOST, {
		method: 'POST',
		body: JSON.stringify(addPeople),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(res => {
		if (res.ok) {
			res.json().then(console.log);
		} else {
			throw new Error('Error en la petición');
		}
	});
};

fetch(urlGET2).then(res => {
	if (res.ok) {
		console.log(
			'%c=== File:/ TAREA II) ===',
			"	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold",
		);
		res.json().then(PostPeople);
	}
});
