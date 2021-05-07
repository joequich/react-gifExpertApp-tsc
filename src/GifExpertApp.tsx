import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState<string[]>(['music']);

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