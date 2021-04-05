import MovieForm from "../../components/MovieForm/MovieForm";
import SearchResults from "../../components/SearchResults/SearchResults";

const NewMovie = (props) => {
    return (
        <div className="NewMovie">
            <h2>New Movie Page</h2>
            <MovieForm />
            <SearchResults props={{...props}} />
        </div>
    );
}
 
export default NewMovie;