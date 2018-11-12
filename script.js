const btn = document.querySelector('button');

function replaceTaco() {
	let paras = document.querySelectorAll('p');
	paras.forEach(function(para) {
		let regexTaco = /taco/gi;
		para.innerHTML = para.innerHTML.replace(regexTaco, 'tacocat')
	});
}

btn.addEventListener('click', replaceTaco);