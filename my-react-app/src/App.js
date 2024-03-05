import React, { useEffect, useState } from 'react';
import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';
import Carousel from './Carousel';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/properties')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        setProperties(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Intro />
      <Carousel properties={properties} />
      <Footer />
    </div>
  );
}

export default App;
