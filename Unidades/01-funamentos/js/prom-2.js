console.log('PROMESAS');

const addOne = value => {
	//  declare promise
	let promise = new Promise((resolve, reject) => {
		if (value >= 3) {
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
		if (value >= 8) {
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
		if (value >= 6) {
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
