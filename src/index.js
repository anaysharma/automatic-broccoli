import './style.css';
import {navBarCreator} from './page-load.js';

const content = document.getElementById("content");

window.onload = () => {
	document.body.appendChild(navBarCreator()).appendChild(content);
};