import React from 'react'
import PropTypes from 'prop-types';

interface IGifs {
    id: string;
    title: string;
    url: string;
}

export const GifGridItem = ({id, title, url}:IGifs) => {
    return (
        <div className="card animate__animated animate__fadeInUp">
           <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
GifGridItem.defaultProps = {
    id: ''
};