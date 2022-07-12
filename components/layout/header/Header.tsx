import React, { useState } from 'react';
import MenuToggle from '@/components/layout/header/MenuToggle';
import NavBarContainer from '@/components/layout/header/NavBarContainer';
import Logo from '@/components/layout/header/Logo';
import MenuList from '@/components/layout/header/MenuList';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <NavBarContainer>
        <Logo />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuList isOpen={isOpen} />
      </NavBarContainer>
    </header>
  );
};

export default Header;
