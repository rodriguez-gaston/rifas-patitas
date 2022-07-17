import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import MenuItem from './MenuItem';

interface MenuListProps {
  isOpen: boolean;
}

const MenuList = ({ isOpen }: MenuListProps) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'center', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Inicio</MenuItem>
        <MenuItem to="/adoptar">Adoptar</MenuItem>
        <MenuItem to="/ayudar">Ayudar</MenuItem>
        <MenuItem to="/donar">Donar</MenuItem>
        <MenuItem to="/blog">Blog</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuList;
