import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import renderHornyAnimal from './render-horny-animal.js';

const list = document.querySelector('.horny-animal');

images.forEach(image => {

    const html = renderHornyAnimal(image);

    const dom = htmlToDOM(html);

    list.appendChild(dom);
});