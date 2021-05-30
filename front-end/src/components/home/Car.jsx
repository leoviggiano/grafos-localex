import React from 'react';
import styled from 'styled-components';

import { Card, Flex, Typography, Button } from '../';

const Car = ({ car }) => (
  <Card height="520px" padding="0" br="10px">
    <Flex flexDirection="column">
      <Img src={car.img} alt="volks" />
      <Flex padding="1rem" flexDirection="column">
        <Flex justifyContent="space-between" mb="20px">
          <Typography>{car.name}</Typography>
          <Typography size="14px" weight="700">
            R$ {car.price}
          </Typography>
        </Flex>
        <Typography size="16px" mb="30px">
          {car.description}
        </Typography>
        <Flex flexDirection="column">
          <Typography mb="10px">Ano: {car.year}</Typography>
          <Typography mb="10px">Cor: {car.color}</Typography>
          <Typography mb="10px">Marca: {car.brand}</Typography>
          <Typography mb="30px">Estado: {car.state}</Typography>
        </Flex>
        <Button>Contatar vendedor</Button>
      </Flex>
    </Flex>
  </Card>
);

const Img = styled.img`
  max-width: 300px;
`;

export default Car;
