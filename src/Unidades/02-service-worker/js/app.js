// confirmar si podemos utilizar SW
// if ('serviceWorker' in navigator) {
// 	console.log('<<< Podemos Usar SW >>>');
// } else {
// 	console.log('Mp podemos usar sw 🤦‍');
// }

// confirmar si podemos utilizar SW
if (navigator.serviceWorker) {
	console.log('<<< Podemos Usar SW >>>');
	navigator.serviceWorker.register('sw.js');
} else {
	console.log('Mp podemos usar sw 🤦‍');
}
