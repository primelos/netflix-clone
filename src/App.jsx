import React, { useState } from 'react'
import './App.css';
import Row from './components/row'
import requests from './utils/request'
import Banner from './components/banner'


function App() {



  return (
    <div className="App">
      {/* navbar */}
      
      {/* banner */}
      <Banner />
      <Row
        title="NETLFIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow // or isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
