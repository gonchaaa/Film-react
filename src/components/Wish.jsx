import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishList, saveWishList } from '../redux/actions';
import '../index.css';
import { Link } from 'react-router-dom';

const Wish = () => {
    const [listName, setListName] = useState('');
    const wishList = useSelector(state => state.wishList);
    const savedWishLists = useSelector(state => state.savedWishLists);
    const dispatch = useDispatch();

    const handleSave = () => {
        if (listName.trim()) {
            dispatch(saveWishList(listName.trim()));
            setListName('');
        } else {
            alert('Please enter a list name');
        }
    };

    const handleListNameChange = (e) => {
        setListName(e.target.value);
    };

    return (
        <div className='wish'>
            <h4>Wish List</h4>

            <input
                type="text"
                placeholder="Enter list name"
                value={listName}
                onChange={handleListNameChange}
            />
            {wishList.map(movie => (
                <div className='text-wish' key={movie.imdbID}>
                    <span>{movie.Title}</span>
                    <button onClick={() => dispatch(removeFromWishList(movie))}>x</button>
                </div>
            ))}
            <div className='buttons'>
                <button onClick={handleSave}>Save</button>

                <Link to={"/wish-list"}>
                    <button className='view'>
                        View Wish-List
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Wish;
