
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
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- [Utilizando Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)
- [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
- [HmlHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)


### Ejercicios Promesas

[prom-1.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/prom-1.js) |
[prom-2.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/prom-2.js) |
[prom-3.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/prom-3.js) |
[prom-4.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/prom-4.js) |

### Ejercicios Fetch API

[fetch-1.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/fetch-1.js) |
[fetch-2.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/fetch-2.js) |
[fetch-3.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/fetch-3.js) |
[fetch-4.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/fetch-4.js) |
[fetch-5.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/fetch-5.js) |
[fetch-6.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/fetch-6.js) |
[tarea.js](https://github.com/emilianoduran/pwaUDEMY/blob/fundamentos/Unidades/01-funamentos/js/tarea.js) |


## Service Worker y Fetch Event

El service worker es el corazón de una pwa. Un service worker funciona como un proxy. Cuando se hace una petición, antes de llegar al servidor, esa petición será recibida por el SW. Si el recurso se encuentra almacenado en caché, el service worker lo retornará, en caso de no disponer de dicho recurso la petición seguirá camino hasta el servidor y cuando llegue la respuesta el service worker volverá a interceder para almacenar esos recursos en caché. Por citar un ejemplo.
También en este capítulo veremos el fech de eventos del service worker que no es lo mismo que el fetch API.
> Es muy importante que para que un SW funcione correctamente se necesita un servicio https:// , como el que ofrece [firebase hosting](https://firebase.google.com/docs/hosting/?hl=es-419) que es gratuito. 

## Resumen puntual de la sección:

- Esta sección está enfocada principalmente en el tema del service worker, ¿cómo instalarlo? y ¿qué podemos hacer con él?

- También aprenderemos a modificar respuestas que es un tema crucial cuando llegues al tema del manejo del cache y respuestas offline.

- Pero primero necesito que comprendamos qué puede hacer el service worker y sobre todo, que comprendan el poder que tiene sobre toda su aplicación web

### Introducción a los Services Workers
Un sw se compone de muchos eventsListeners que escuchan eventos como

Eventos | Descripción
------------ | -------------
install | Cuando se instala
activate | Cuando se activa el sw
push | Cuando recibe una notificación push
fetch | Cuando hace algún fetch
sync | Cuando se recupera la conexión a internet y necesita sincronizar la data
message | Cuando recibe algun mensaje de la app



<figure>
  <img src="./Doc/img/intro.png" style="width:800px" alt="Captura de pantalla diapositiva del curso"/>
  <figcaption>¿Cómo trabaja un service worker?</figcaption>
</figure>