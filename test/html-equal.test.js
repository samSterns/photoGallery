import renderHornyAnimal from '../home/render-horny-animal.js';

const test = QUnit.test;

QUnit.module('html equal');

test('normalizes whitespace', (assert) => {
    // Arrange
    const uniwhalObject = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'narwhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const oneAnimal = renderHornyAnimal(uniwhalObject);

    const expected = `
        <li class="info-container">
            <h2>narwhal</h2>
            <div class="image-container">
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="narwhal">
            </div>
            <div>
                <h3 class="animal-type">narwhal</h3>
                <h4 class="horns">1</h4>
            </div>
        </li>   
    `;

    assert.htmlEqual(oneAnimal, expected);
});