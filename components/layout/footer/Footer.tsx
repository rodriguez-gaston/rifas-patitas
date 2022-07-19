import Instagram from '@/icons/Instagram';
import { Box, Text, Heading, Divider, Flex } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Box px={5} bg="gray.100" color="gray.800">
        <Box py={5}>
          <Flex gap={6} justifyContent="space-between">
            <Box>
              <Heading as="h5" size="sm">
                Patitas en Acción
              </Heading>
              <Text fontSize="sm">Cambiarles la vida esta en nostrxs</Text>
            </Box>
            <Instagram />
          </Flex>
        </Box>
        <Divider />
        <Box py={5}>
          <Text
            textAlign={['center', 'center', 'left', 'left']}
            fontSize="sm"
          >{`© ${year} Patitas en Acción`}</Text>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
