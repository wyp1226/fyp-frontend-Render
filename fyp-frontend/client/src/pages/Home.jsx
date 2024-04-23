import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Header from '../components/Header.jsx';
import Navigation from '../components/Navigation.jsx';
const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ padding: '1rem' }}>
          <Typography variant="h6">
            This database contains ground-truth RNA viruses secondary structures
            of any type and organism. The ultimate goal of this database is to
            incorporate a comprehensive collection of known RNA viruses secondary
            structures, and to provide the scientific community with simple ways
            of searching the proposed database.
          </Typography>
        </Box>
      </Container>

      <Typography variant="h6" align="center">
        Current holdings: 207 RNA viruses secondary structures in total.
      </Typography>

      <hr />
      <Typography align="center" variant="h5">
        Disclaimer
      </Typography>
      <Container>
        <Box sx={{ padding: '2rem' }}>
          <Typography variant="h6">
            Use of the RNA viruses secondary structures database is free of charge.
            Although the authors have made every effort to ensure that the
            database is correctly implemented, and fulfill the function described
            in the documentation, neither the authors nor The Chinese University
            of Hong Kong guarantee its correctness, fitness for a particular
            purpose, or future availability.
          </Typography>
        </Box>
      </Container>
      <Navigation />
    </>
  );
};

export default Home;
