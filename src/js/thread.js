import {bindCollapsables} from './collapsable.js';

function bindSeeMore(element, button, template) {
  let count = 1;
  let handler = (e) => {
	element.style.maxHeight = element.scrollHeight + "px";
	for (let i=0; i<count; i++) {
	  if (template.children.length === 0) {
		button.style.display = 'none';
		break;
	  }
	  let element = template.children[0];
	  button.insertAdjacentElement('beforebegin', element);
	  bindCollapsables(element);
	}
	if (template.children.length === 0) {
	  button.style.display = 'none';
	}
	count *= 2;
	element.style.maxHeight = element.scrollHeight + "px";

	button.innerHTML = `Show ${template.children.length} More`;
  };

  button.addEventListener('click', handler);
  element.addEventListener('transitionend', (e) => {
	if (e.target === element) {
	  element.style.maxHeight = 'none';
	}
  });
  handler();
}

export function bindThreads(element) {
  const threads = element.querySelectorAll('.thread');
  threads.forEach((e) => {
	let template = e.querySelector('template').innerHTML;
	let holder = document.createElement('div');
	holder.innerHTML = template;
	let button = e.querySelector('button'); 
	bindSeeMore(e, button, holder);
  });
}
