import { Container } from '@mui/material';
import React from 'react';
import Banner from '../../components/Banner';
import ListProduct from '../../components/ListProduct';

const Home: React.FC = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <h1>Home</h1>
        <Banner/>
        <h1>List Product</h1>
        <ListProduct/>
        <h1>News</h1>
      </Container>
    </div>
  )
}

export default Home
