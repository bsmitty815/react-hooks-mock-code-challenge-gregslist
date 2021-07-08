import React, {useState} from "react";

function Search({searchPlant, searchTerm}) {

  const [searchBar, setSearchBar] = useState("")



  //once you submit it will send the searchbar term to the app page to but in searchTerm state
  function handleSubmit(e) {
    e.preventDefault();
    searchPlant(searchBar)
  }


  // you need to get the search term and save it into state as you are writing in the search bar
  // function searchBarOnChange(e) {
  //   setSearchBar(e.target.value)
  // }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
