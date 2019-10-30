import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import renderHornyAnimal from './render-horny-animal.js';

const list = document.querySelector('.horny-animal');
const imageTypeFilter = document.querySelector('.filter-choices');

function render(imagesToRender) {
    while (list.lastElementChild){
        list.lastElementChild.remove();
    }
    imagesToRender.forEach(image => {
        const html = renderHornyAnimal(image);
        const dom = htmlToDOM(html);
        list.appendChild(dom);
    });
}

images.forEach(image => {

    const html = renderHornyAnimal(image);

    const dom = htmlToDOM(html);

    list.appendChild(dom);
});

imageTypeFilter.addEventListener('change', () => {

    const filterString = imageTypeFilter.value;
    console.log(filterString);
    let filteredImages = null;

    if (!filterString) {
        filteredImages = images;
    } else {
        filteredImages = images.filter(image => {
            console.log(image);
            return image.keyword === filterString; 
        });
    }
    console.log(filteredImages);
    render(filteredImages);
});

render(images);