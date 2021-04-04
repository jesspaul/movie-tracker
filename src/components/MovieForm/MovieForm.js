import { useContext, useState } from 'react';
import { WatchedContext } from '../../contexts/WatchedContext';

const MovieForm = () => {
    const { dispatch } = useContext(WatchedContext);
    const [ title, setTitle ] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({type: 'ADD_MOVIE', movie: {
            title
        }});
        console.log(title);
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='title' value={title} onChange={evt => setTitle(evt.target.value)} />
            <input type='submit' value='search movie' />
        </form>
    );
}
 
export default MovieForm;