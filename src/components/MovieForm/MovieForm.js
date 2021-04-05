import { useContext, useState } from 'react';
import { SearchResultsContext } from '../../contexts/SearchResultsContext';
import { WatchedContext } from '../../contexts/WatchedContext';
import { searchMovie } from '../../services/omdb-api';
import SearchResults from '../SearchResults/SearchResults';

const MovieForm = () => {
    const { dispatch } = useContext(WatchedContext);
    const { setSearchResults } = useContext(SearchResultsContext);
    const [ title, setTitle ] = useState('');

    async function getMovieData(searchTitle) {
        const data = await searchMovie(searchTitle);
        console.log(data);
        setSearchResults([...data.Search]);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({type: 'ADD_MOVIE', movie: {
            title
        }});
        getMovieData(title);
        setTitle('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='title' value={title} onChange={evt => setTitle(evt.target.value)} />
                <input type='submit' value='search movie' />
            </form>
        </div>
    );
}
 
export default MovieForm;