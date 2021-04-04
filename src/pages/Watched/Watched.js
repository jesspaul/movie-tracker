import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WatchedContext } from '../../contexts/WatchedContext';
import Movie from '../../components/Movie/Movie';

const Watched = () => {
    const { movies } =useContext(WatchedContext);
    return (
        <div className="Watched">
            <h2>Watched Page</h2>
            {movies.length ? movies.map((movie, idx) => (
                <Movie movie={movie} idx={idx} key={idx} />
            )) : <div>No Movies</div>}
            <Link to='/new' >+ Add New Movie</Link>
        </div>
    );
}
 
export default Watched;