import image from './images/chef.jpg';

let titleContent = "Welcome to the finest cousine of your area.";
let info = "relaxed fine dining restaurant set in the historic rooms of the Grade II-listed Shoreditch Town Hall, London.\n\nLed by Chef-Patron Isaac McHale, we serve a seasonal tasting menu featuring modern, elegant dishes rooted in technique but stripped back to their essential elements. We place a great emphasis on sourcing the best produce the British Isles has to offer, showcased in dishes inspired by Isaac’s culinary memories and travels."

function craftElement (className, element, innerText = "") {
	const item = document.createElement(element);
	item.classList.add(className);
	item.innerText = innerText;
	return item;
}

export function home () {
	const title = craftElement("title", "h2", titleContent);
	const backPanel = craftElement("container", "div");
	const description = craftElement("description", "p", info);
	const chefImage = new Image();
	chefImage.src = image;

	backPanel.appendChild(title);
	backPanel.appendChild(chefImage);
	backPanel.appendChild(description);

	return backPanel;
}
