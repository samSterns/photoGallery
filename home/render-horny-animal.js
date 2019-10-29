export default function renderHornyAnimal(oneImage) {
    const html = `
        <li class="info-container">
            <h2>${oneImage.title}</h2>
            <div class="image-container">
                <img src="${oneImage.url}" alt="${oneImage.title}">
            </div>
            <div>
                <h3 class="animal-type">${oneImage.keyword}</h3>
                <h4 class="horns">1</h4>
            </div>
        </li>   
        `;

    return html; 

}