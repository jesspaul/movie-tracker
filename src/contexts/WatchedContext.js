import { createContext, useReducer, useEffect } from 'react';
import { WatchedReducer } from '../reducers/WatchedReducer';

export const WatchedContext = createContext();

const WatchedContextProvider = (props) => {
    const [movies, dispatch] = useReducer(WatchedReducer, [], () => {
        const localData = localStorage.getItem('movies');
        return localData ? JSON.parse(localData) : []
    });
    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);
    return (
        <WatchedContext.Provider value={{movies, dispatch}}>
            {props.children}
        </WatchedContext.Provider>
    );
}
 
export default WatchedContextProvider;