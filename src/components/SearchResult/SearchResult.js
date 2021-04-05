import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { WatchedContext } from '../../contexts/WatchedContext';
import './SearchResult.css';

const SearchResult = ({ movie, history }) => {
    const { dispatch } = useContext(WatchedContext);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_MOVIE',
            movie: {
            title: movie.Title
                }
            });
        history.push('/watched');
    }

    return (
        <div className="SearchResult">
            <div className="result">
                <div className="details">
                    <h3 className='title'>{movie.Title}</h3>
                    <p className='year'>{movie.Year}</p>
                    <p className='rating'>{movie.Rated}</p>
                    <p className='actors'>{movie.Actors}</p>
                    <form onSubmit={handleSubmit}>
                        <input type="submit" value="+ Add to Watched List"/>
                    </form>
                </div>
                <img className='poster' src={movie.Poster} alt={`movie poster for ${movie.Title}`} />
            </div>
        </div>
    );
}
 
export default withRouter(SearchResult);