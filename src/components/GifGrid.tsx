import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

type Props = {
    category: string;
}

interface IGifs {
    id: string;
    title: string;
    url: string;
}

export const GifGrid = ({category}:Props) => {
    const { data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="category-title">{ category }</h3>
            { loading && <p className="animate__pulse">Loading...</p> }
            <div className="card-grid animate__slideInUp">
                {images.map( (img:IGifs) => (
                    <GifGridItem
                    key={img.id}
                    {...img}
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propType = {
    category: PropTypes.string.isRequired
}
