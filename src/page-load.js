import {home} from './home.js';
import {menu} from './menu.js';
import {contact} from './contact.js';

function tabCreator (id) {
	const button = document.createElement("button");
	button.setAttribute("id", id);
	button.setAttribute("name", id);
	button.classList.add("nav-button");
	button.textContent = id;
	button.addEventListener("click", handleClick);
	return button;
}

function toggleActiveButton (id) {
	let el = document.getElementById(id);
	switch (id) {
		case "home":
			el.nextSibling.classList.remove("active");
			el.nextSibling.nextSibling.classList.remove("active");
			break;
		case "menu" :
			el.nextSibling.classList.remove("active");
			el.previousSibling.classList.remove("active");
			break;
		case "contact" :
			el.previousSibling.classList.remove("active");
			el.previousSibling.previousSibling.classList.remove("active");
			break;
		default:
			break;
	}
	el.classList = "nav-button active";
}

function contentSwap (itm, id) {
	content.innerHTML = "";
	content.appendChild(itm);
	toggleActiveButton(id);
}

function handleClick () {
	let id = this.id;
	if (id === "home") {
		contentSwap(home(), id);
	} else if (id === "menu") {
		contentSwap(menu(), id);
	} else if (id === "contact") {
		contentSwap(contact(), id);
	}
}

export function navBarCreator () {
	const navBar = document.createElement("nav");
	const navBox = document.createElement("div");
	const homeButton = tabCreator("home");
	const menuButton = tabCreator("menu");
	const contactButton = tabCreator("contact");
	const heading = document.createElement("h2");
	const buttonBox = document.createElement("div");

	navBox.classList.add("nav-box");
	navBar.classList.add("nav-bar");
	homeButton.classList.add("active");
	buttonBox.classList.add("button-box");
// yeah yeah, I know, dump Brand name. don't face palm so hard.
	heading.textContent = "Auto Broccoli!";
	buttonBox.appendChild(homeButton);
	buttonBox.appendChild(menuButton);
	buttonBox.appendChild(contactButton);
	navBox.appendChild(heading);
	navBox.appendChild(buttonBox);
	navBar.appendChild(navBox);
	content.appendChild(home());

	return navBar;
}