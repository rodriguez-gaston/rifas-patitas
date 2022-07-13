import Instagram from '@/icons/Instagram';
import { Box, Stack, Center, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Box p={5} borderTopWidth="thin" borderTopColor="gray.100">
        <SimpleGrid columns={[1, 1, 2, 4]} gap={6}>
          <Box h="40" bg="blue.500" />
          <Box h="40" bg="blue.500" />
          <Box h="40" bg="blue.500" />
          <Box h="40" bg="blue.500" />
        </SimpleGrid>
      </Box>
      <Box px={5} py={3} bg="gray.200" color="gray.800">
        <Stack
          direction={['column-reverse', 'row', 'row', 'row']}
          justify={['center', 'center', 'start', 'start']}
        >
          <Center fontSize="sm">{`© ${year} Patitas en Acción`}</Center>
          <Center>
            <Instagram />
          </Center>
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
