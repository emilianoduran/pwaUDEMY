console.log(
	'%c=== File:/ Prom II ===',
	"	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold",
);

const addOne = value => {
	//  declare promise
	let promise = new Promise((resolve, reject) => {
		if (value >= 13) {
			reject('algo');
		}
		setTimeout(() => {
			// resolve Promise
			resolve(value + 1);
		}, 800);
	});
	//return promise
	return promise;
};
// call promise and concatenate promises
addOne(5)
	.then(v => {
		console.log(v);
		return addOne(v);
	})
	.then(v => {
		console.log(v);
		return addOne(v);
	})
	.then(v => {
		console.log(v);
	});

const add2 = value => {
	let promise = new Promise((resolve, reject) => {
		if (value >= 20) {
			reject('El número es my Alto');
		}
		setTimeout(() => {
			resolve(value + 2);
		}, 1000);
	});
	return promise;
};

add2(5)
	.then(add2)
	.catch(err => console.log(err))
	.then(add2)
	.catch(err => console.log(err))
	.then(add2)
	.catch(err => console.log(err))
	.then(v => {
		console.log(v);
	})
	.catch(err => {
		console.log(err);
	});

const add3 = value => {
	let promise = new Promise((resolve, reject) => {
		if (value >= 13) {
			reject('valor Alto');
		}
		setTimeout(() => {
			resolve(value + 3);
		}, 1000);
	});
	return promise;
};

add3(0)
	.then(v => {
		console.log(v);
		return add3(v);
	})
	.catch(err => console.log(err))
	.then(v => {
		console.log(v);
		return add3(v);
	})
	.catch(err => console.log(err))
	.then(v => {
		console.log(v);
		return add3(v);
	})
	.catch(err => console.log(err))
	.then(v => {
		console.log(v);
	})
	.catch(err => console.log(err));
