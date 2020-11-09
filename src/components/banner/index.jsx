import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/request";
import './banner.css'


const Banner = ({}) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randMovie = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randMovie]);
      return request;
    }
    fetchData();
  }, []);
  console.log("banner", movie);

  function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  // ? is if image is missing it won't crash movie?
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      {/* title */}
      <div className="banner__contents">
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>      
      </div>
      {/* div 2 buttons */}

      {/* description */}

    </header>
  );
};

export default Banner;
