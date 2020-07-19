function bindToggleCollapse(element) {
  let header = element.querySelector('.header');

  let visible = false;
  let collapsedHeight = (header.clientHeight) + "px";
  element.style.maxHeight = collapsedHeight;

  element.addEventListener('click', (e) => {
	visible = !visible;
	if (visible) {
	  let fullHeight = element.scrollHeight + "px";
	  element.style.maxHeight = fullHeight;
	} else {
	  let collapsedHeight = (header.scrollHeight) + "px";
	  element.style.maxHeight = collapsedHeight;
	}
  });
}
  
export function bindCollapsables(element) {
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
