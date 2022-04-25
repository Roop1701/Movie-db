import React from "react";
import "../styles/navbar.css";

const API_BASE_URL = "http://www.omdbapi.com/?s=avatar";
//&apikey=1ac49480
export default function NavBar({ setInputValue, inputValue, search }) {
  return (
    <div className="navbar">
      <span className="heading">
        <strong>Movie DB</strong>
      </span>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyPress={search}
        type="text"
        placeholder="Search Movie .."
        className="search-bar"
      />
    </div>
  );
}
