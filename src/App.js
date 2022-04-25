import "./App.css";
import { useState } from "react";
import { NavBar, MovieList } from "./components";
import axios from "axios";

const API_BASE_URL = "http://www.omdbapi.com";
//&apikey=1ac49480"

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [movie, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const search = async (e) => {
    if (e.code === "Enter") {
      setisLoading(true);
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=1ac49480"
      );
      // set data
      setMovies(response.data.Search);
      setisLoading(false);
    }
  };

  return (
    <div className="main">
      <NavBar
        search={search}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <MovieList isLoading={isLoading} movieList={movie} />
    </div>
  );
}
export default App;
