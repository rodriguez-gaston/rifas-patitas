import { Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <NextLink href={'/'} passHref>
      <Link _hover={{ textDecoration: 'none' }}>
        <Text fontSize="lg" fontWeight="bold">
          Patitas en Acción
        </Text>
      </Link>
    </NextLink>
  );
};

export default Logo;
