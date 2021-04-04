import { useContext, useState } from 'react';
import { WatchedContext } from '../../contexts/WatchedContext';
import { searchMovie } from '../../services/omdb-api';

const MovieForm = () => {
    const { dispatch } = useContext(WatchedContext);
    const [ title, setTitle ] = useState('');

    async function getMovieData(searchTitle) {
        const data = await searchMovie(searchTitle);
        console.log('data: ', data);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({type: 'ADD_MOVIE', movie: {
            title
        }});
        getMovieData(title);
        console.log('title: ', title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='title' value={title} onChange={evt => setTitle(evt.target.value)} />
            <input type='submit' value='search movie' />
        </form>
    );
}
 
export default MovieForm;