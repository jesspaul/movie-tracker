import { Link } from 'react-router-dom';

const WatchList = () => {
    return (
        <div className="Watchlist">
            <h2>WatchList Page</h2>
            <Link to='/new' >+ Add New Movie</Link>
        </div>
    );
}
 
export default WatchList;