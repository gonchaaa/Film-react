import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/actions';
import '../index.css';

const List = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('marvel'); 
    const [selectedMovie, setSelectedMovie] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies(query);
    }, [query]);

    const fetchMovies = (query) => {
        fetch(`https://www.omdbapi.com/?s=${query}&apikey=47bb27dc`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    setMovies(data.Search);
                } else {
                    setMovies([]);
                    console.log(data.Error);
                }
            });
    };

    const handleSearch = () => {
        setQuery(searchTerm); 
    };

    const handleReadMore = (movie) => {
        setSelectedMovie(movie);
    };

    const handleClosePopup = () => {
        setSelectedMovie(null);
    };

    return (
        <div className='list-first'>
            <div className='search'>
                <input 
                    type="text" 
                    value={searchTerm} 
                    placeholder='Search...'
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='list'>
                {movies.map(movie => (
                    <div className='movie' key={movie.imdbID}>
                        <div className="img">
                            <img src={movie.Poster} alt={movie.Title} />
                        </div>
                        <div className="text">
                            <h3>{movie.Title}</h3>
                            <button onClick={() => dispatch(addToWishList(movie))}>Add Wish-list</button>
                            <button onClick={() => handleReadMore(movie)}>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedMovie && (
                <div className='popup' onClick={handleClosePopup}>
                    <div className='popup-content' onClick={e => e.stopPropagation()}>
                        <h2>{selectedMovie.Title}</h2>
                        <h5>{selectedMovie.Type}</h5>
                        <h5>{selectedMovie.Year}</h5>
                        <p><a href={`https://www.imdb.com/title/${selectedMovie.imdbID}`} target="_blank" rel="noopener noreferrer">View on IMDb</a></p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default List;
