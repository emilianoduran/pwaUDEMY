console.log(
	'%c=== File:/ Fetch V ===',
	"	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold",
);

fetch('https://reqres.in/api/users/2')
	.then(res => {
		if (res.ok) {
			res
				.clone()
				.json()
				.then(res => {
					console.log(res.data);
				});
			res
				.clone()
				.json()
				.then(res => {
					console.log(res.data);
				});
		} else {
			throw new Error('No existe el usuario');
		}
		// duplicar este código sin el método clone() nos daría un error // solo debería llamarse dos veces como máximo
	})
	.catch(err => {
		console.error(err);
	});
