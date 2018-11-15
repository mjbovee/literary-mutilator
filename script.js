// declare global variables
const tacoCat = document.querySelector('#tacoCat');
const wordUp = document.querySelector('#wordUp');
const letters = document.querySelector('#letters');
const html = document.querySelector('html');
const body = document.querySelector('body');
const para1 = document.querySelector('#para1');

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
	let r = randomInt(255);
	let g = randomInt(255);
	let b = randomInt(255);
	let r2 = randomInt(255);
	let g2 = randomInt(255);
	let b2 = randomInt(255);
	html.style.background = `rgb(${r}, ${g} ,${b})`;
	html.style.color = `rgb(${r2}, ${g2} ,${b2})`;
}

// generate random int < 255 for change color function
function randomInt(num) {
	return(Math.floor((Math.random()) * num));
}

// make array of words out of first paragraph for anagram maker
const words = para1.innerHTML.split(' ');

// exclude 'taco' from anagram-able words
const wordsMapped = words.map(word => word.split(''));

function wordsScrambled() {
	para1.innerText = shuffle(words).join(' ');
}

function lettersScrambled() {
	let newArray = [];
	wordsMapped.forEach(word => {
		newArray.push(shuffle(word).join(''));
	});
	para1.textContent = newArray.join(' ');
}

function shuffle(array) {
	for(let i = array.length -1; i > 0; i--) {
		const rand = randomInt(i + 1);
		[array[i], array[rand]] = [array[rand], array[i]];
	}
	return array;
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
wordUp.addEventListener('click', wordsScrambled);
letters.addEventListener('click', lettersScrambled);
tacoCat.addEventListener('click', replaceTaco);