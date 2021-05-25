import { render, screen } from '@testing-library/react';
import { GifExpertApp, Props } from '../GifExpertApp';

describe('GifExpertApp', () => {
    const defaultProps: Props = {
        defaultCategories: ['cars'],
    }
    
    function renderUI(props: Partial<Props> = {}) {
        return render(<GifExpertApp {...defaultProps} {...props}/>)
    }

    it('render list of categories', () => {
        const categories = {
            defaultCategories: ['music', 'movies']
        }
        renderUI(categories);
        expect(screen.queryAllByRole('list').length).toBe(categories.defaultCategories.length);
    });
});