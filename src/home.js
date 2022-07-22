import image from './images/chef.png';
import {makeElement} from './createEl.js';

let titleContent = "Welcome to the finest cousine of your area.";
let info = "relaxed fine dining restaurant set in the historic rooms of the Grade II-listed Shoreditch Town Hall, London.\n\nLed by Chef-Patron Isaac McHale, we serve a seasonal tasting menu featuring modern, elegant dishes rooted in technique but stripped back to their essential elements. We place a great emphasis on sourcing the best produce the British Isles has to offer, showcased in dishes inspired by Isaac’s culinary memories and travels."

export function home () {
	const title = makeElement("h2", "title", titleContent);
	const backPanel = makeElement("div", "container");
	const description = makeElement("p", "description", info);
	const homeContainer = makeElement("div", "home-container");
	const imgBox = makeElement("div", "image-box");
	const chefImage = new Image();
	chefImage.src = image;

	imgBox.appendChild(chefImage);
	backPanel.appendChild(title);
	backPanel.appendChild(imgBox);
	backPanel.appendChild(description);
	homeContainer.appendChild(backPanel);
	return homeContainer;
}