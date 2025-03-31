import React, { useState } from "react";

function Search( { search, onhandleSearch }) {
  //const [search, setSearch] = useState("");
  
  /*
  function onHandleSearch(e) {
    const userInput = e.target.value
    setSearch(userInput);
    handleSearch(userInput);
  }
  */

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={ e => onhandleSearch(e.target.value) 
          /*(e) => {
          console.log("Searching...")
          onHandleSearch(e);
          }*/
        }
      />
    </div>
  );
}

export default Search;
