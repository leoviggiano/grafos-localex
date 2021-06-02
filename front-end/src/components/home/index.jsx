import React from 'react';
import styled from 'styled-components';

import { Flex, Sidebar, Header } from '../';
import Car from './Car';

const Home = ({
  color,
  setColor,
  price,
  setPrice,
  year,
  setYear,
  brand,
  setBrand,
  cars,
  carState,
  setCarState,
  setCars,
  allCars,
}) => {
  return (
    <Flex minHeight="100vh">
      <Sidebar
        {...{
          color,
          setColor,
          price,
          setPrice,
          year,
          setYear,
          brand,
          setBrand,
          carState,
          setCarState,
        }}
      />
      <Flex padding="0 40px" width="100%" flexDirection="column">
        <Header {...{ allCars, setCars }} />
        <Grid>
          {cars.map((car, i) => (
            <Car key={i} car={car} />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  column-gap: 30px;
  row-gap: 30px;
  padding-bottom: 30px;
`;

export default Home;
