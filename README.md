
# Curso de udemy PWA 

- Profesor: Fernando Herrera. 

## Fundamentos

Para porder trabajar necesitaremos un servidor de archivos estáticos. Para esto realizaremos la instalación de http-server aunque otra opción podría ser la extención de Visual Studio Code [Live Server-GitHub](https://github.com/ritwickdey/vscode-live-server)
### intalar  http-server

1. `npm install -g http-server`
2. Luego para ejecutar el servidor
3. `http-server`

# Documentación MDN web docs
- [Promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/prototype)
- [Promise.all()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/all)
- [Promise.race()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/race)
- [Estado de las Promesas](Doc/estados-de-las-promesas.pdf)

### Ejercicios

```javascript
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

```