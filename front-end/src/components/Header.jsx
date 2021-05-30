import React from 'react';

import { Typography, Flex } from './';

const Header = () => {
  return (
    <Flex justifyContent="space-between" height="80px" alignItems="center">
      <Typography weight="300" size="32px">
        Localex
      </Typography>
      <Flex alignItems="center">
        <Typography>aaa</Typography>
      </Flex>
    </Flex>
  );
};

export default Header;
