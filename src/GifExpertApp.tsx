import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export interface Props {
    defaultCategories?: string[];
}

export const GifExpertApp = ( {defaultCategories = []}: Props) => {
    const [ categories, setCategories ] = useState<string[]>(defaultCategories);

    return (
        <>
            <h2 className="title">
                <span className="title-text">GifExpertApp</span>
            </h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            {categories.map( category => (
                <GifGrid 
                    key={category}
                    category={category} 
                />
            ))}
        </>
    );
}