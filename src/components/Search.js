import React, { useState } from "react";

function Search( { handleSearch }) {
  const [search, setSearch] = useState("");

  function onHandleSearch(e) {
    const userInput = e.target.value
    setSearch(userInput);
    handleSearch(userInput);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={
          /*(e) => {
          console.log("Searching...")
          onHandleSearch(e);
        }*/
        onHandleSearch
        }
      />
    </div>
  );
}

export default Search;
