//import style
import style from "./SearchBar.module.css";

//Import Hooks
import { useState } from "react";

//Searchbar Module
export default function SearchBar(props) {
  const { onSearch, onCloseAllCards } = props;

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.widthSearhBar}>
      <div className={style.searchContainer}>
        <div>
          <input
            type="search"
            value={id}
            className={style.searchBar}
            onChange={handleChange}
            placeholder="Search Characters here..."
          />
        </div>
        
        <div className={style.divButtonSearch}>
          <button
            className={style.buttonSearch}
            onClick={() => {
              onSearch(id);
              setId("");
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => onCloseAllCards()}
          className={style.closeAllCards}
        >
          Close Cards
        </button>
      </div>
    </div>
  );
}
