function bindToggleCollapse(element) {
  let body = element.querySelector('.body');
  if (body == null)
	return;

  let visible = false;
  let collapsedHeight = (element.scrollHeight - body.clientHeight) + "px";
  element.style.maxHeight = collapsedHeight;

  element.addEventListener('click', (e) => {
	visible = !visible;
	if (visible) {
	  let fullHeight = element.scrollHeight + "px";
	  element.style.maxHeight = fullHeight;
	} else {
	  let collapsedHeight = (element.scrollHeight - body.clientHeight) + "px";
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
