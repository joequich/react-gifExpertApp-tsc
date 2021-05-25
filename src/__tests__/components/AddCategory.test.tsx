import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory, Props } from '../../components/AddCategory';

describe('AddCategory', () => {
    const setCategories = jest.fn();
    const defaultProps: Props = {
        setCategories: setCategories,
    }
    
    function renderUI(props: Partial<Props> = {}) {
        return render(<AddCategory {...defaultProps} {...props}/>)
    }

    it('change the text box', () => {
        renderUI();
        const input = screen.getByLabelText('Search');
        const value = 'Hola mundojj';

        expect((input as HTMLInputElement).value).toBe('') // empty before
        fireEvent.change(input, { target: { value: value } })
        expect((input as HTMLInputElement).value).toBe(value);
    })

    test('not post the information with submit', () => {
        renderUI();
        fireEvent.submit(screen.getByRole("search"));
        expect(setCategories).not.toHaveBeenCalled();
    });

    it('call the setCategories and clear the text box', () => {
        renderUI();
        const input = screen.getByLabelText('Search');
        const value = 'Music';

        // 1. simulate inputChange
        fireEvent.change(input, { target: { value: value } })

        // 2. simulate submit
        fireEvent.submit(screen.getByRole("search"));

        // 3. setCategories must have been called
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // 4. the input value must be ''
        expect((input as HTMLInputElement).value).toBe('') 
    });
    
});