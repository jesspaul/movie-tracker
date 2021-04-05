import { createContext, useState, useEffect } from 'react';

export const SearchResultsContext = createContext();

const SearchResultsContextProvider = (props) => {
    const [ searchResults, setSearchResults ] = useState([]);
    
    return (
        <SearchResultsContext.Provider value={{searchResults, setSearchResults}}>
            {props.children}
        </SearchResultsContext.Provider>
    );
}
 
export default SearchResultsContextProvider;