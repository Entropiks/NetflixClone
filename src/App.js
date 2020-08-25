import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchOriginals} 
        isLargeRow
        />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} />
    </div>
  );
}

export default App;
