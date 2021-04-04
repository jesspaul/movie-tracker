import { useContext, useState } from 'react';

const MovieForm = () => {
    const [ title, setTitle ] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(title);
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='title' value={title} onChange={evt => setTitle(evt.target.value)} />
            <input type='submit' value='search movie' />
        </form>
    );
}
 
export default MovieForm;