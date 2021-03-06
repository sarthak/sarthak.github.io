'use strict';

function bindToggleCollapse(element) {
  let body = element.querySelector('.body');
  if (body == null)
	return;

  let visible = false;
  let collapsedHeight = (element.scrollHeight - body.clientHeight) + "px";
  element.style.maxHeight = collapsedHeight;
  body.style.opacity = '0';

  element.addEventListener('click', (e) => {
	visible = !visible;
	if (visible) {
	  let fullHeight = element.scrollHeight + "px";
	  element.style.maxHeight = fullHeight;
	  body.style.opacity = '1';
	} else {
	  let collapsedHeight = (element.scrollHeight - body.clientHeight) + "px";
	  element.style.maxHeight = collapsedHeight;
	  body.style.opacity = '0';
	}
  });
}
  
function bindCollapsables(element) {
  if ('classList' in element) {
	if (element.classList.contains('collapsable')) {
	  bindToggleCollapse(element);
	}
  }
  const collapsables = element.querySelectorAll('.collapsable');
  collapsables.forEach((c) => {
	bindToggleCollapse(c);
  });
}

function bindSeeMore(element, button) {
  let count = 1;
  if (element.hasAttribute('data-start'))
	count = element.getAttribute('data-start');

  let i = 0;
  let handler = (e) => {
	element.style.maxHeight = element.scrollHeight + "px";
	for (let c=0; c<count; c++) {
	  if (i == element.children.length) {
		button.style.display = 'none';
		break;
	  }
	  let post = element.children[i++];
	  post.style.display = '';
	  bindCollapsables(post);
	}
	if (i == element.children.length) {
	  button.style.display = 'none';
	}
	count *= 2;
	element.style.maxHeight = element.scrollHeight + "px";

	button.innerHTML = `Show ${element.children.length-i} More`;
  };

  button.addEventListener('click', handler);
  element.addEventListener('transitionend', (e) => {
	if (e.target === element) {
	  element.style.maxHeight = 'none';
	}
  });
  handler();
}

function bindThreads(element) {
  const threads = element.querySelectorAll('.thread');
  threads.forEach((e) => {
	let posts = e.querySelector('.posts');
	let children = posts.children;
	for (let i=0; i<children.length; i++) {
	  children[i].style.display = 'none';
	}
	let button = e.querySelector('button'); 
	bindSeeMore(posts, button);
  });
}

window.onload = () => {
  bindCollapsables(document);
  bindThreads(document);
};
