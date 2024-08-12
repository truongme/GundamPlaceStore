import React from 'react';
import { Container, Grid } from '@mui/material';
import styles from './styles.module.scss'
import { List_Gundam, listGundamFamous } from '../../data';
import img from '../../assets/images/card.jpg';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Slider from 'react-slick';
import Slide1 from '../../assets/images/slide1.jpg';
import Slide2 from '../../assets/images/slide2.jpg';
import Slide3 from '../../assets/images/slide3.jpg';
import { useNavigate } from 'react-router-dom';
import GundamCard from '../../components/GundamCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NewsCardFocus from "../../layouts/NewsCard";
import NewsCardItem from "../../layouts/NewsCard/newsItem";

const Home = () => {

  const slides = [Slide1, Slide2, Slide3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  const data = List_Gundam

  const navigate = useNavigate();

  const handleSelectItem = (id: number) => {
    navigate(`/gundam/${id}`)
  }

  return (
    <div className={styles.homeCtn}>
      <Container maxWidth="xl">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div className={styles.imgCtn} key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} className={styles.imgBanner} />
            </div>
          ))}
        </Slider>
        <div className={styles.topSearchCtn}>
          <div className={styles.topSearchTitle}>
            <span>Tìm kiếm hàng đầu</span>
            <WhatshotIcon />
          </div>
          <div className={styles.topSearchList}>
            {listGundamFamous.map(index => (
              <div className={styles.topSearchItem}>
                <div className={styles.topSearchImgCtn}>
                  <img src={img} alt="" />
                </div>
                <div className={styles.topSearchContent}>{index}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.listProductTitle}>
          <span>Gợi ý hôm nay</span>
          <WhatshotIcon />
        </div>
        <Grid container spacing={2}>
          {data.map(item => (
            <Grid item xs={12} sm={6} md={3} key={item.id} onClick={() => handleSelectItem(item.id)}>
              <GundamCard key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} />
            </Grid>
          ))}
        </Grid>
        <div className={styles.listProductFooter} onClick={() => navigate('/discover')}>
          <span>Xem thêm</span>
          <NavigateNextIcon />
        </div>
        <div>
          <h1>New</h1>
          <div className={styles.newsGird}>
            <div className={styles.newsFocusCtn}>
              <NewsCardFocus />
            </div>
            <div className={styles.newsListCtn}>
              <NewsCardItem />
              <NewsCardItem />
              <NewsCardItem />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
