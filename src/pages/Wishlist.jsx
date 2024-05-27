import React from 'react';
import { useSelector } from 'react-redux';
import '../index.css';

const Wishlist = () => {
    const savedWishLists = useSelector(state => state.savedWishLists);

    return (
        <div className='wishlist'>
            <h1>Wishlist</h1>
            {Object.keys(savedWishLists).map((list, index) => (
                <div key={index}>
                    <h2>Wishlist name: {list}</h2>
                    {savedWishLists[list].map(movie => (
                        <p key={movie.imdbID}>{movie.Title}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Wishlist;
