import React from 'react';

//controlled input component that updates the search in App.js

function Search({searchTerm, setSearchTerm}) {

    //handle any input change that updates searchTerm in Parent
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);

    };

    //rendering the search input 
    return (
        <div className ="search">
            <input 
                type="text"
                placeholder="Search plants..."
                value={searchTerm}
                onChange={handleSearchChange}
            />

        </div>
    );
}
export default Search;