import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import renderHornyAnimal from './render-horny-animal.js';

const list = document.querySelector('.horny-animal');
const imageTypeFilter = document.querySelector('filter-choices');

images.forEach(image => {

    const html = renderHornyAnimal(image);

    const dom = htmlToDOM(html);

    list.appendChild(dom);
});


imageTypeFilter.addEventListener('change', () => {

    const filterString = imageTypeFilter.value;
    let filteredImages = null;

    if (!filterString) {
        filteredImages = images;
    } else {
        filteredImages = images.filter(image => {
            return image.keyword === filterString; 
        });
    }
    render(filteredImages);
});

render(images);
function render(imagesToRender) {
    while (URL.lastElementChild){
        ul.lastElementChild.remove();
    }
    imagesToRender.forEach(image => {
        const html = renderHornyAnimal(image);
        const dom = htmlToDOM(html);
        ul.appendChild(dom);
    });
}