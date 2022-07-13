import NextLink from 'next/link';
import React from 'react';
import { Link } from '@chakra-ui/react';

const DonationSticky = () => {
  return (
    <NextLink href={'/donar'}>
      <Link
        pos="fixed"
        bottom={5}
        right={5}
        px={4}
        py={2}
        fontWeight="bold"
        borderRadius="full"
        bg="primary.700"
        color="white"
        _hover={{
          background: 'primary.800',
          color: 'white',
        }}
        _active={{
          background: 'primary.800',
          color: 'white',
        }}
      >
        Donar
      </Link>
    </NextLink>
  );
};

export default DonationSticky;
