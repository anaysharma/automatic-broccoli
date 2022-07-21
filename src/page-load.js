import {home} from './home.js';
import {menu} from './menu.js';
import {contact} from './contact.js';

export function tabCreator (id) {
	const button = document.createElement("button");
	button.setAttribute("id", id);
	button.setAttribute("name", id);
	button.textContent = id;
	button.addEventListener("click", handleClick);
	return button;
}

function handleClick () {
	if (this.id === "home") {
		content.appendChild(home());
	} else {
		console.log(this.id);
	}
}

export function navBarCreator () {
	const navBar = document.createElement("nav");
	const homeButton = tabCreator("home");
	const menuButton = tabCreator("menu");
	const contactButton = tabCreator("contact");
	const heading = document.createElement("h2");
	const buttonBox = document.createElement("div");

	navBar.classList.add("nav-bar");
	buttonBox.classList.add("button-box");
	heading.textContent = "Auto Broccoli!";

	buttonBox.appendChild(homeButton);
	buttonBox.appendChild(menuButton);
	buttonBox.appendChild(contactButton);
	navBar.appendChild(heading);
	navBar.appendChild(buttonBox);

	return navBar;
}