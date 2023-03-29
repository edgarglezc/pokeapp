import React from 'react';

function SearchButton({handleSubmit}) {
    return (
        <button onClick={handleSubmit}>Buscar</button>
    );
}

export default SearchButton;