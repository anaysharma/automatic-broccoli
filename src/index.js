import './style.css';
import {navBarCreator} from './page-load.js';

const content = document.getElementById("content");
const body = document.body;
window.onload = () => {
	body.appendChild(navBarCreator());
	body.appendChild(content);
};