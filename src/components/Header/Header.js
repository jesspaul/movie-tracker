import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='Header'>
            <h1 className='Header-h1'>Movie Tracker</h1>
            <nav>
                <ul>
                    <Link className='Header-link' to='/'>
                        <li>Home</li>
                    </Link>
                    <Link className='Header-link' to='/watched'>
                        <li>Watched</li>
                    </Link>
                    <Link className='Header-link' to='/watchlist'>
                        <li>Watch List</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;