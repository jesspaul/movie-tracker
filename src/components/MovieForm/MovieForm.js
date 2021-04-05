import { useContext, useState } from 'react';
import { SearchResultsContext } from '../../contexts/SearchResultsContext';
import { searchMovie } from '../../services/omdb-api';

const MovieForm = () => {
    const { setSearchResults } = useContext(SearchResultsContext);
    const [ title, setTitle ] = useState('');

    async function getMovieData(searchTitle) {
        const data = await searchMovie(searchTitle);
        setSearchResults([...data.Search]);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
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