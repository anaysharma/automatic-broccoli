import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/9.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import {makeElement} from './createEl.js';

let imageList = [ img1, img2, img3, img4, img5, img6, img7, img8 ];
let randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

function createCard (img, dish) {
	const dishImg = new Image();
	dishImg.classList.add("dish-image");
	dishImg.src = img;
	const card = makeElement("div", "card");
	const dishName = makeElement("h3", "dish-title", dish);
	const description = makeElement("p", "item-info", randomText);
	const cardItem = makeElement("div", "item");
	const button = makeElement("button", "buy-button");
	button.textContent = "Get";
	const imgContainer = makeElement("div", "image");

	cardItem.appendChild(dishName);
	cardItem.appendChild(description);
	cardItem.appendChild(button);
	imgContainer.appendChild(dishImg);
	card.appendChild(imgContainer);
	card.appendChild(cardItem);

	return card;
}

export function menu () {
	const container = makeElement("div", "menu-container");
	for (let i = 1; i < 9; i++) {
		container.appendChild(createCard(imageList[i-1], `Dish ${i}`));
	}
	return container;
}