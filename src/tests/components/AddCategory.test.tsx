import { render, screen } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';

describe('Tests in <AddCategory />', () => {
    const setCategories = jest.fn();

    const component = render(<AddCategory setCategories={setCategories} />)

    test('should display the component correctly', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();
    });
});