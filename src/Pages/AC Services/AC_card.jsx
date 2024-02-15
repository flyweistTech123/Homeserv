import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const ImageSlider = ({ images }) => {
    
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
  };

  return (
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index} className='hostel26'>
          <img src={image} alt={`slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

const AC_card = ({  images }) => {
  return (
      <div className="slider-container12">
        <ImageSlider images={images} />
      </div>
  );
};

export default AC_card;
