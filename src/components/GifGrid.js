import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifts(category);
    return (
        <>
        <h3>{category}</h3>
        { loading && <p className='animate__jackInTheBox'>Loading</p>}
            <div className="card-grid"> 
                {images.map(img => (<GifGridItem
                    key={img.id}
                    {...img}>
                </GifGridItem>))}
            </div>
        </>
    )
}

export default GifGrid;