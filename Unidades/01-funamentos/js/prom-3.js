console.log('PromiseAll');

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

const hasFinished = name => {
	console.log(`<<<${name} has finished>>>`);
};

let addS = addSlow(1)
	.then(addSlow)
	.then(addSlow)
	.then(addSlow)
	.then(addSlow)
	.then(addSlow)
	.then(() => hasFinished('SLOW<<<<'))
	.catch(err => console.error(err));

let addF = addFast(1)
	.then(addFast)
	.then(addFast)
	.then(addFast)
	.then(addFast)
	.then(addFast)
	.then(() => hasFinished('FAST>>>'))
	.catch(err => console.log(err));

let tareas = [addFast(8), addSlow(1), addFast(5), addSlow(3), true, addFast(3)];

Promise.all(tareas)
	.then(console.log)
	.catch(err => console.log(err));
Promise.all(tareas)
	.then(console.log)
	.catch(err => console.log(err));
