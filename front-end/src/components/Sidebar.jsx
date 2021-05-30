import React from 'react';
import styled from 'styled-components';

import { Flex, Typography, Input } from './';
import { GRAY, WHITE } from '../constants';

import brands from '../assets/brands';

const Sidebar = () => (
  <Wrapper minWidth="350px" padding="40px 10px 0 10px" flexDirection="column">
    <Brands />
    <Price />
    <Year />
  </Wrapper>
);

const Year = () => (
  <Section>
    <Typography mb="10px" size="14px">
      Ano:
    </Typography>
    <Flex justifyContent="space-around">
      <Flex alignItems="center">
        <Typography radius="5px" bgColor={GRAY} padding="3px 5px" mr="5px">
          DE
        </Typography>
        <Input width="90px" height="20px" />
      </Flex>
      <Flex alignItems="center">
        <Typography
          radius="5px"
          bgColor={GRAY}
          padding="3px 5px"
          mr="5px"
          ml="5px"
        >
          ATÉ
        </Typography>
        <Input width="90px" height="20px" />
      </Flex>
    </Flex>
  </Section>
);

const Price = () => (
  <Section>
    <Typography mb="10px" size="14px">
      Valor:
    </Typography>
    <Flex justifyContent="space-around">
      <Flex alignItems="center">
        <Typography radius="5px" bgColor={GRAY} padding="3px 5px" mr="5px">
          MIN
        </Typography>
        <Input width="90px" height="20px" />
      </Flex>
      <Flex alignItems="center">
        <Typography
          radius="5px"
          bgColor={GRAY}
          padding="3px 5px"
          mr="5px"
          ml="5px"
        >
          MAX
        </Typography>
        <Input width="90px" height="20px" />
      </Flex>
    </Flex>
  </Section>
);

const Brands = () => {
  const icons = Object.entries(brands).map((i) => i);
  return (
    <Section flexDirection="column">
      <Typography mb="10px" size="14px">
        Marcas:
      </Typography>
      <Images>
        {icons.map(([key, value]) => (
          <img key={key} src={value} alt={key}></img>
        ))}
      </Images>
    </Section>
  );
};

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
  justify-items: center;
  align-items: center;
  margin-top: 20px;

  img {
    padding: 10px;
    cursor: pointer;
    box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
      rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Section = styled(Flex)`
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid ${GRAY};

  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const Wrapper = styled(Flex)`
  background-color: ${WHITE};
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`;

export default Sidebar;
