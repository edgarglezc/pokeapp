import React from 'react';

function SearchBar({value, setValue}) {
    return (
        <input 
            type="text"
            placeholder='Escribe tu busqueda...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

export default SearchBar;