console.log(
	'%c=== File:/ Prom III ===',
	"	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold",
);

const addSlow2 = value => {
	return new Promise((resolve, reject) => {
		// console.log(`SLOW>>> ${value}`);
		if (value >= 20) {
			reject('El número es muy alto');
		}

		setTimeout(() => {
			resolve(value + 1);
		}, 1000);
	});
};

const addFast2 = value => {
	return new Promise((resolve, reject) => {
		// console.log(`FAST>>> ${value}`);
		if (value >= 20) {
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

let addS = addSlow2(1)
	.then(addSlow2)
	.then(addSlow2)
	.then(addSlow2)
	.then(addSlow2)
	.then(addSlow2)
	.then(() => hasFinished('SLOW<<<<'))
	.catch(err => console.error(err));

let addF = addFast2(1)
	.then(addFast2)
	.then(addFast2)
	.then(addFast2)
	.then(addFast2)
	.then(addFast2)
	.then(() => hasFinished('FAST>>>'))
	.catch(err => console.log(err));

let tareas = [addFast2(8), addSlow2(1), addFast2(5), addSlow2(3), true, addFast2(3)];

Promise.all(tareas)
	.then(console.log)
	.catch(err => console.log(err));
Promise.all(tareas)
	.then(console.log)
	.catch(err => console.log(err));
