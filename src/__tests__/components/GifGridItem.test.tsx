import { render, screen } from '@testing-library/react';
import GifGridItem, { Props } from '../../components/GifGridItem';

describe('Test in <GifGridItem />', () => {

    const title = 'Hey';
    const url ='https//localhost/algo.png'
    let component = render(<GifGridItem title={title} url={url} />);   // spread operator

    // const defaultProps: Props = {
    //     title:'Hey',
    //     url: 'https//localhost/algo.png'
    // }
    
    // function renderUI(props: Partial<Props> = {}) {
    //     return render(<GifGridItem {...defaultProps} {...props}/>)
    // }

    beforeEach(() => {
        component = render(<GifGridItem title={title} url={url} />);   // spread operator
    });

    test('should display the component correctly', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();
    });
    
    test('should have a paragraph with the title', () => {
        // render(<GifGridItem title={title} url={url} />); 
        expect(screen.getByText(title)).toHaveTextContent(title);
    });

    test('should have the same image as the url and the props image', () => {
        // render(<GifGridItem title={title} url={url} />);   // spread operator
        const img = screen.getByAltText(title);
        expect(img).toHaveAttribute('src', url);
        expect(img).toHaveAttribute('alt', title);
    });

    test('should have card animate__animated animate__fadeInUp', () => {
        // render(<GifGridItem title={title} url={url} />);   // spread operator
        const item = screen.getByRole('listitem');
        expect(item).toHaveClass('card animate__animated animate__fadeInUp', {exact: true});
        // expect(item.classList.contains('animate__fadeInUp')).toBe(true);
    });
});