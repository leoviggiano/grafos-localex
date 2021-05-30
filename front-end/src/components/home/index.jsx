import React from 'react';

import { Flex, Typography, Sidebar, Header } from '../';

const Home = () => (
  <Flex minHeight="100vh">
    <Sidebar />
    <Flex padding="0 40px" width="100%" flexDirection="column">
      <Header />
      <Typography>Alo</Typography>
    </Flex>
  </Flex>
);

export default Home;
