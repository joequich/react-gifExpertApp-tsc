import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

interface Props {
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
            <ol>
                {categories.map( category => (
                    <GifGrid 
                        key={category}
                        category={category} 
                    />
                ))}
            </ol>
        </>
    );
}