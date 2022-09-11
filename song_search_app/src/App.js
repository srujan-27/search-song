import React from "react";
//import axios from "react";
import "./App.css";

import { useState, useEffect } from "react";
function App() {
  const [movie, setMovie] = useState({});
  const [search, setSearch] = useState("");

  const url = ` https://freesound.org/apiv2/search/text/?query=${search}&token=P1sCozx19VQTIx5ArEKyeujA0DBm3EqujeBXU0oQ `;

  const getMovie = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const x = data.results.forEach((element) => {
        console.log(data);
      });
      console.log(x);
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getMovie();
  }, []);

  function checkResponse(data) {
    if (data.Response === "True") {
      return (
        <div>
          <center>
            <h4>Title: {data.results.name}</h4>
            <p>Year: {data.next}</p>
            <p>Writer: {data.username}</p>
            <p>{data.Response}</p>
          </center>
        </div>
      );
    }
    return <p>No audio found</p>;
  }

  return (
    <div>
      <input type="text" value={search} onChange={onInputChange} />
      <button type="submit" onClick={getMovie}>
        Search
      </button>
      <br></br>
      {checkResponse(movie)}
    </div>
  );
}
export default App;
