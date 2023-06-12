import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container,Typography } from '@mui/material';

const About= () => {


  return (
    <Container maxWidth="md" >
      <Typography variant="h4">
        About Dream Travel
      </Typography>
      <Typography variant="body1" >
        Dream Travel is your gateway to unforgettable adventures around the globe.
        We are passionate about creating exceptional travel experiences for our customers,
        enabling them to explore diverse cultures, stunning landscapes, and vibrant cities.
      </Typography>
      <Typography variant="body1" >
        Our team of experienced travel experts carefully curates each itinerary,
        ensuring that every detail is taken care of, from accommodation and transportation
        to guided tours and immersive activities. Whether you're seeking relaxation on
        pristine beaches, thrilling outdoor adventures, or cultural immersion in ancient
        cities, Dream Travel has the perfect trip for you.
      </Typography>
      <Typography variant="body1" >
        At Dream Travel, we believe that travel has the power to transform lives and foster
        a deeper understanding of the world. We are committed to sustainable tourism,
        supporting local communities, and preserving the natural and cultural heritage of
        the destinations we visit. Join us on an extraordinary journey and let your dreams
        take flight with Dream Travel.
      </Typography>
    </Container>
  );
};

export default About;
