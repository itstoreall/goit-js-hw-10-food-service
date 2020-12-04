import menuTemplate from "../templates/gallery-menu.hbs";
import menu from "../menu.json";

const markup = menuTemplate(menu);

const galleryMenuRef = document.querySelector('.js-menu');

galleryMenuRef.insertAdjacentHTML("beforeend", markup);