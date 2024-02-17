import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Shopping.css'




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

const ProductImageslider = ({  images }) => {
  return (
      <div className="slider-container124">
        <ImageSlider images={images} />
      </div>
  );
};

export default ProductImageslider;
