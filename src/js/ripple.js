const ripple_div = document.createElement('div');
ripple_div.className = 'ripple_div';
const ripple = document.createElement('div');
ripple_div.appendChild(ripple);

function addRipple(element) {
  element.addEventListener('click', (e) => {
	element.appendChild(ripple_div);
	ripple.style.top = e.offsetY + "px";
	ripple.style.left = e.offsetX + "px";
	ripple.animate([
	  {transform: 'scale(1)', opacity: '100%'},
	  {transform: 'scale(200)', opacity: '0%'}
	], {
	  duration: 1000
	});
  });
}

export function bindRippleEffect(element) {
  if ('classList' in element) {
	if (element.classList.contains('ripple')) {
	  addRipple(element);
	}
  }
  const collapsables = element.querySelectorAll('.ripple');
  collapsables.forEach((c) => {
	addRipple(c);
  });
}
