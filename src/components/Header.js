import React from "react";
import Search from "./Search";

function Header({searchPlant, searchTerm}) {


  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchPlant={searchPlant} searchTerm={searchTerm} />
    </header>
  );
}

export default Header;
