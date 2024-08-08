import { Container } from '@mui/material';
import React from 'react';
import Banner from '../../layouts/Banner';
import ListProduct from '../ListProduct';
import Category from '../../layouts/Category';
import News from '../News';

const Home = () => {
  return (
    <div>
      <Category />
      <Container maxWidth="xl">
        <Banner />
        <ListProduct />
        <News />
      </Container>
    </div>
  )
}

export default Home
