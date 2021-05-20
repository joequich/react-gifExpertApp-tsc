import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';

describe('GifExpertApp', () => {
    it('render list of categories', () => {
        const categories = ['music', 'movies'];
        const { asFragment } = render(<GifExpertApp defaultCategories={categories}/>);
        // expect(asFragment()).toMatchSnapshot();
        expect(screen.queryAllByRole('list')).toMatchSnapshot();
        // expect(screen.queryAllByRole('list').length).toBe(categories.length);
    });
});