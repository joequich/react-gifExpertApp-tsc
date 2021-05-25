import { render, screen } from '@testing-library/react';
import { GifGridItem, Props } from '../../components/GifGridItem';

describe('GifGridItem', () => {

    const title = 'Hey';
    const url ='https//localhost/algo.png'

    beforeEach(() => {
        render(<GifGridItem title={title} url={url} />);
    });
    
    it('render a paragraph with the title', () => {
        expect(screen.getByText(title)).toHaveTextContent(title);
    });

    it('render the same image as the url and the props image', () => {
        const img = screen.getByAltText(title);
        expect(img).toHaveAttribute('src', url);
        expect(img).toHaveAttribute('alt', title);
    });

    it('render card animate__animated animate__fadeInUp', () => {
        const item = screen.getByRole('listitem');
        expect(item).toHaveClass('card animate__animated animate__fadeInUp', {exact: true});
        // expect(item.classList.contains('animate__fadeInUp')).toBe(true);
    });
});