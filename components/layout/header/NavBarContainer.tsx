import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface NavBarProps {
  children: ReactNode;
}

const NavBarContainer = ({ children, ...props }: NavBarProps) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} p={8} shadow="sm" color="gray.800" {...props}>
      {children}
    </Flex>
  );
};

export default NavBarContainer;
