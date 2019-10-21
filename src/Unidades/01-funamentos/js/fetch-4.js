console.log(
	'%c=== File:/ Fetch IV ===',
	"	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold",
);

const container = document.querySelector('.main-container');

const img = document.createElement('img');
img.setAttribute('alt', 'Imagen de superman');
img.setAttribute('style', 'width:100px;margin:20px');

fetch('./img/superman.png')
	.then(res => res.blob())
	.then(data => {
		// crer url
		let imgPath = URL.createObjectURL(data);

		img.setAttribute('src', imgPath);
		container.appendChild(img);
	});
