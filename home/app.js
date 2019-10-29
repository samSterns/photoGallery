import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import renderHornyAnimal from './render-horny-animal.js';

const list = document.querySelector('.images');

// loop the cat data
images.forEach(images => {
    // call template function to get html
    const html = renderHornyAnimal(images);

    // make DOM from html
    const dom = htmlToDOM(html);

    // append to the list
    list.appendChild(dom);
});