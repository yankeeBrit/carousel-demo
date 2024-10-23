import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarouselGrid from './components/CarouselGrid';

import './App.css';

function App() {
  const [data, setData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    axios.get('./data/data.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>NBA Carousel Example</h1>
      </header>
      <main>
        <CarouselGrid data={data} />
      </main>
    </div>
  );
}

export default App;
