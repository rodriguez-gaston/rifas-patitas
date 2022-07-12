import Close from '@/icons/Close';
import Menu from '@/icons/Menu';
import { Box } from '@chakra-ui/react';
import React from 'react';

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <Close /> : <Menu />}
    </Box>
  );
};

export default MenuToggle;
