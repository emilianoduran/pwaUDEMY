console.log('PromiseRace');

const addSlow = value => {
	return new Promise((resolve, reject) => {
		// console.log(`SLOW>>> ${value}`);
		if (value >= 10) {
			reject('El número es muy alto');
		}

		setTimeout(() => {
			resolve(value + 1);
		}, 1000);
	});
};

const addFast = value => {
	return new Promise((resolve, reject) => {
		// console.log(`FAST>>> ${value}`);
		if (value >= 10) {
			reject('El número es Alto');
		}
		setTimeout(() => {
			resolve(value + 1);
		}, 500);
	});
};
// Carrera de promesas .... se ejecuta primero la que resuelve primero. si la primera falla no obtendremos ningún resultado.
Promise.race([addFast(2), addSlow(2)]).then(console.log);
