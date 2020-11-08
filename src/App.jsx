import React, { useState } from 'react'
import './App.css';
import Row from './components/row'
import requests from './utils/request'

function App() {



  return (
    <div className="App">
        <h1>Netflix Clone</h1> 
        <Row title='NETLFIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        
    </div>
  );
}

export default App;
