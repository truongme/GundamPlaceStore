import React from 'react';
import Slider from 'react-slick';
import Slide1 from '../../assets/images/slide1.jpg';
import Slide2 from '../../assets/images/slide2.jpg';
import Slide3 from '../../assets/images/slide3.jpg';
import styles from './styles.module.scss';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const Banner: React.FC = () => {
    
  const slides = [Slide1, Slide2, Slide3];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div className={styles.imgCtn} key={index}>
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
