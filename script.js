// declare global variables
const btn = document.querySelector('button');
const html = document.querySelector('html');
const body = document.querySelector('body');

// replace "taco" with "tacocat"
function replaceTaco() {
	let paras = document.querySelectorAll('p');
	paras.forEach(function(para) {
		let regexTaco = /taco/gi;
		para.innerHTML = para.innerHTML.replace(regexTaco, 'tacocat')
	});
}

// cahnge the background and text color of the html
function changeColor() {
	let r = randomInt();
	let g = randomInt();
	let b = randomInt();
	let r2 = randomInt();
	let g2 = randomInt();
	let b2 = randomInt();
	html.style.background = `rgb(${r}, ${g} ,${b})`;
	html.style.color = `rgb(${r2}, ${g2} ,${b2})`;
}

// generate random int < 255 for change color function
function randomInt() {
	return(Math.floor((Math.random()) * 255));
}

// use xml http request
const requestURL = 'https://jsonplaceholder.typicode.com/posts/3';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	const newParagraph = request.response;
	makeNewParagraph(newParagraph);
};

// make new paragraph
function makeNewParagraph(jsonObj) {
	let para = document.createElement('p');
	para.innerHTML = "<strong>Here's some text I inserted using an xml http request: </strong>" + jsonObj['body'];
	body.appendChild(para);
}

// do the same thing, but with the fetch api
fetch('https://jsonplaceholder.typicode.com/posts/3')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		let newJsonObj = (myJson['body']);
		let newPara = document.createElement('p');
		newPara.innerHTML = "<strong>Here's the same text, but inserted using fetch api: </strong>" + newJsonObj;
		body.appendChild(newPara);
});

// event listeners
document.addEventListener('keydown', changeColor);
btn.addEventListener('click', replaceTaco);