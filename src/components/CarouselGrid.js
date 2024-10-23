import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselGrid = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
  };

  return (
    <div>
        <div className="carousel-container">
            <Slider {...settings}>
                {data.carousel1 !== undefined ? data.carousel1.map((item) => (
                    <Card key={item.id} item={item} />
                )) : <p>Loading...</p>}
            </Slider>
        </div>
        <div className="carousel-container">
            <Slider {...settings}>
                {data.carousel2 !== undefined ? data.carousel2.map((item) => (
                    <Card key={item.id} item={item} />
                )) : <p>Loading...</p>}
            </Slider>
        </div>
    </div>
  );
};

export default CarouselGrid;
