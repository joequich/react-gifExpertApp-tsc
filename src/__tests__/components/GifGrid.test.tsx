import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs, IFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid', () => {

    const category = 'music';
    const mockedUseFetchGifs = useFetchGifs as jest.Mock<IFetchGifs>;

    it('render component correctly', () => {
        mockedUseFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const { asFragment } = render(<GifGrid category={category}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render items when loading images useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/coas.png',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/coas.png',
            title: 'Cualquier cosa'
        }];

        mockedUseFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        render(<GifGrid category={category}/>);
        expect(screen.queryByText('Loading...')).toBeFalsy();
        expect(screen.queryAllByRole('listitem').length).toBe(gifs.length);
    });
});