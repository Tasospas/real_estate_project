import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

function Carousel({ properties }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    variableWidth: false,
  };

  return (
    <Slider {...settings}>
      {properties.map(property => (
        <div key={property.id} className="slide">
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p>Price: {property.price}</p>
          <p>Longitude: {property.longitude}</p>
          <p>Latitude: {property.latitude}</p>
          <p>Address: {property.address}</p>
          <img src={property.image} alt="Property" className="property-image" />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
