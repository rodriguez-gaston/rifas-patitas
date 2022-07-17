import Instagram from '@/icons/Instagram';
import {
  Box,
  Stack,
  Center,
  SimpleGrid,
  Text,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import MenuItem from '@/components/layout/header/MenuItem';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Box p={5} borderTopWidth="thin" borderTopColor="gray.100">
        <SimpleGrid columns={[1, 1, 2, 4]} gap={6}>
          <Box>
            <Heading as="h5" size="sm">
              Patitas en Acción
            </Heading>
            <Text>Cambiarles la vida esta en nostrxs</Text>
          </Box>
          <MenuItem to="/adoptar">Adoptar</MenuItem>
          <MenuItem to="/ayudar">Ayudar</MenuItem>
          <MenuItem to="/blog">Blog</MenuItem>
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
