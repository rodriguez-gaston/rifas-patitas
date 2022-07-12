import React from 'react';
import Instagram from '@/icons/Instagram';
import Link from 'next/link';
import { Flex, Spacer, Center, Text, Stack, CloseButton } from '@chakra-ui/react';

const Header = () => {
  return (
    <header>
      <Flex p={5}>
        <Center>
          <Link href={'/'}>
            <button className="justify-self-start order-1">Patitas en Accion</button>
          </Link>
        </Center>
        <Spacer />
        <Stack direction="row" alignItems="center">
          <Text>Hola</Text>
          <Text>Chau</Text>
          <Text>Insta</Text>
          <CloseButton bg="white" />
        </Stack>
      </Flex>
      {/* <section className="max-w-7xl mx-auto p-4 grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3 justify-between items-center text-gray-800">
        <div className="h-[1px] bg-gray-300 col-span-2 md:hidden order-3"></div>
        <section className="justify-self-end order-2 md:order-3">
          <Instagram />
        </section>
      </section> */}
    </header>
  );
};

export default Header;
