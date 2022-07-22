import {makeElement} from './createEl.js';
import image from './images/4.jpg';

function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

function createFormFeild (className) {
	const inputDiv = makeElement("div", `input-${className}`);
	const input = makeElement("input", className);
	const label = makeElement("label", `label-${className}`, capitalizeFirstLetter(className));
	
	input.setAttribute("type", "text");
	input.setAttribute("name", className);
	input.setAttribute("placeholder", `Enter ${className}`);
	label.setAttribute("for", className);

	inputDiv.appendChild(label);
	inputDiv.appendChild(input);

	return inputDiv;
}

export function contact () {
	const formContainer = makeElement("div", "contact-container");
	const leftDiv = makeElement("div", "left");
	const bgImg = new Image();
	const formDiv = makeElement("div", "form-container");
	const form = makeElement("form", "form");
	const fieldset = makeElement("fieldset", "fieldset");
	const buttonBox = makeElement("div", "buttons");
	const btnSubmit = makeElement("button", "submit-button", "Send");
	const btnReset = makeElement("button", "reset-button", "Clear");
	const nameInput = createFormFeild("name");
	const emailInput = createFormFeild("email");
	const queryInput = createFormFeild("query");
	const headingForm = makeElement(
		"h2",
		"form-heading",
		"We would love to hear from you."
	)

	form.setAttribute("method", "post");
	form.setAttribute("action", " ");
	btnSubmit.setAttribute("type", "submit");
	btnReset.setAttribute("type", "reset");
	bgImg.src = image;

	leftDiv.appendChild(bgImg);
	fieldset.appendChild(nameInput);
	fieldset.appendChild(emailInput);
	fieldset.appendChild(queryInput);
	buttonBox.appendChild(btnSubmit);
	buttonBox.appendChild(btnReset);
	form.appendChild(fieldset);
	form.appendChild(buttonBox);
	formDiv.appendChild(headingForm);
	formDiv.appendChild(form);
	formContainer.appendChild(leftDiv);
	formContainer.appendChild(formDiv);

	return formContainer;
}