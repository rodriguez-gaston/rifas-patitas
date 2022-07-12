import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import { Link, Text } from '@chakra-ui/react';

interface MenuItemProps {
  children: ReactNode;
  to: string;
}

const MenuItem = ({ children, to = '/', ...rest }: MenuItemProps) => {
  return (
    <NextLink href={to} passHref>
      <Link>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </NextLink>
  );
};

export default MenuItem;
