import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchOriginals} />
      <Row title="Trending Now" />
    </div>
  );
}

export default App;
