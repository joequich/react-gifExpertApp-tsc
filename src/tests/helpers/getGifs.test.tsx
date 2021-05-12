import { getGifs } from '../../helpers/getGifs';

describe('Test with getGifs Fecth', () => {

    test('must bring 10 elements', async() => {
        const gifs = await getGifs('cars');
        expect(gifs.length).toBe(10);
    });

    test('must bring zero elements if no argument is passed.', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});