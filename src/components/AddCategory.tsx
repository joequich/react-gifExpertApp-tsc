import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import PropTypes from 'prop-types';

type Props = {
    setCategories: Dispatch<SetStateAction<string[]>>;
}

export const AddCategory = ({setCategories}: Props) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => {
                const exist = cats.find(cat => cat === inputValue);
                if (exist) return [...cats]; 
                return [inputValue, ...cats]
            });
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" value={inputValue} onChange={handleInputChange}/>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}