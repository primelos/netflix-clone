import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import './Row.css'




const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies((x) => (x = request.data.results));
      return request;
    }

    fetchData();
  }, [fetchUrl]);

//   console.table(movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title} </h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            
          />
        ))}
      </div>
      {/* container -> posters */}
    </div>
  );
};

export default Row;
{
}
