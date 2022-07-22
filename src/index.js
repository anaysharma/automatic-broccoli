import './style.css';
import {navBarCreator} from './page-load.js';

const content = document.getElementById("content");
const body = document.body;

function footer () {
	const navPanel = document.createElement("footer");
	const navText = document.createElement("p");
	navText.innerText = "Designed and made with ♥ by Anay Sharma";

	navPanel.appendChild(navText);
	return navPanel;
}
window.onload = () => {
	body.appendChild(navBarCreator());
	body.appendChild(content);
	body.appendChild(footer())
};