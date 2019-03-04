let sections = document.querySelectorAll(".post");
let contents = document.querySelectorAll(".main-content");
let expanders = [];

for (let i=0; i<sections.length; i++) {
	contents[i].style.display = 'none';

	let elem = document.createElement('button');
	elem.style.display = 'block';
	expanders.push(elem);
	elem.textContent = "Expand to read more";
	elem.onclick = reveal(i);

	sections[i].appendChild(elem);
}

function reveal (i) {
	return function() {
		contents[i].style.display = 'initial';
		expanders[i].textContent = 'Collapse this post';
		expanders[i].onclick = hide(i);
	}
}

function hide (i) {
	return function() {
		contents[i].style.display = 'none';
		expanders[i].textContent = 'Expand to read more';
		expanders[i].onclick = reveal(i);
	}
}
