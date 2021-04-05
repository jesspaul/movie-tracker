import './SearchResult.css';

const SearchResult = ({ movie }) => {
    return (
        <div className="SearchResult">
            <div className="result">
                <img className='poster' src={movie.Poster} alt={`movie poster for ${movie.Title}`} />
                <h3 className='title'>{movie.Title}</h3>
                <p className='year'>{movie.Year}</p>
            </div>
        </div>
    );
}
 
export default SearchResult;