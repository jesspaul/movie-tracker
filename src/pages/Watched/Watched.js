import { Link } from 'react-router-dom';

const Watched = () => {
    return (
        <div className="Watched">
            <h2>Watched Page</h2>
            <Link to='/new' >+ Add New Movie</Link>
        </div>
    );
}
 
export default Watched;