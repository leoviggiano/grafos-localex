import React from 'react';

import { Typography, Flex, Button } from './';

const Header = ({ setCars, allCars }) => {
  return (
    <Flex justifyContent="space-between" height="80px" alignItems="center">
      <Typography weight="300" size="32px">
        Localex
      </Typography>
      <Flex alignItems="center">
        <Button onClick={() => setCars(allCars)}>Limpar filtros</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
