// el service worker va a actuar en base a ciertos eventos que tengan lugar dentro de app
self.addEventListener('fetch', e => {
	console.log(e);
});
