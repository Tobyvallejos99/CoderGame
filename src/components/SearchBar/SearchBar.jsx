const { useState } = require("react");
const { useDispatch } = require("react-redux");

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch(getGameByName(name)); descomentar cuando exista la action!!
    }
    return(
        <div>
            <input type="text" placeholder="Search" onChange={handleInput} />
            <button type="submit" onClick={handleSubmit} >Search</button>
        </div>
    )
}

export default SearchBar;