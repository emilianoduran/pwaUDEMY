console.log('FUNDAMENTOS');

function sumarUno(value, callback) {
	if (value >= 7) {
		callback('Número muy Alto');
		return;
	}
	setTimeout(() => {
		callback(null, value + 1);
	}, 1000);
}
// Esto se conoce como el infierno de los callbacks. y es muy dificil de mantener.
sumarUno(5, function(error, newValue) {
	if (error) {
		console.log(error);
	}
	console.log(newValue);
	sumarUno(newValue, function(error, newValue2) {
		if (error) {
			console.log(error);
		}
		console.log(newValue2);
		sumarUno(newValue2, function(error, newValue3) {
			if (error) {
				console.log(error);
			}
			console.log(newValue3);
		});
	});
});

// Para esto se crearon las promesas.
