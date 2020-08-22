import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
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
