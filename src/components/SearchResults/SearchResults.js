import { useContext } from 'react';
import { SearchResultsContext } from '../../contexts/SearchResultsContext';
import SearchResult from "../SearchResult/SearchResult";

const SearchResults = () => {
    const { searchResults } = useContext(SearchResultsContext);
    return (
        <div className='SearchResults'>
            {searchResults.length ? (
                searchResults.map((movie, idx) => (
                <SearchResult movie={movie} key={idx} />
                ))
            ) : ( <div>No Search yet</div> )}
        </div>
    );
}
 
export default SearchResults;