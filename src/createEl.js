export function makeElement(element, className, innerText = "") {
	const item = document.createElement(element);
	item.classList.add(className);
	if (innerText !== "") {
		item.innerText = innerText;
	}
	return item;
}