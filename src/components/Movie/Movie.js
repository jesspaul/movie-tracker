import { useContext } from 'react';
import { WatchedContext } from '../../contexts/WatchedContext';

const Movie = ({movie, idx}) => {
    const {dispatch} = useContext(WatchedContext);
    return (
        <div className='Movie'>
            <h3>{movie.title}</h3>
            <p onClick={() => dispatch({type: 'REMOVE_MOVIE', idx})}>delete</p>
        </div>
    );
}
 
export default Movie;