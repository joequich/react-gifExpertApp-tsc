import React from 'react'
import PropTypes from 'prop-types';

//IGifs
export interface Props {
    title: string;
    url: string;
}

const GifGridItem = ({title, url}:Props) => {
    return (
        <div role="listitem" className="card animate__animated animate__fadeInUp">
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

export default GifGridItem;