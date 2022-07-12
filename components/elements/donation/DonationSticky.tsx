import Link from 'next/link';
import React from 'react';
import { Button } from '@chakra-ui/react';

const DonationSticky = () => {
  return (
    <Link href={'/donar'}>
      <Button
        pos="fixed"
        bottom={5}
        right={5}
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
      </Button>
      {/* <button className="fixed bottom-5 right-4 bg-primary-700 text-white px-4 py-2 rounded-full hover:bg-primary-900">Donar</button> */}
    </Link>
  );
};

export default DonationSticky;
