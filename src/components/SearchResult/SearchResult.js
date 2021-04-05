import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WatchedContext } from '../../contexts/WatchedContext';
import './SearchResult.css';

const SearchResult = ({ movie }) => {
    const { dispatch } = useContext(WatchedContext);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_MOVIE',
            movie: {
            title: movie.Title
                }
            });
    }

    return (
        <div className="SearchResult">
            <div className="result">
                <img className='poster' src={movie.Poster} alt={`movie poster for ${movie.Title}`} />
                <h3 className='title'>{movie.Title}</h3>
                <p className='year'>{movie.Year}</p>
                {/* <Link to='/watched'> */}
                    <form onSubmit={handleSubmit}>
                        <input type="submit" value="+ Add to Watched List"/>
                    </form>
                {/* </Link> */}
            </div>
        </div>
    );
}
 
export default SearchResult;