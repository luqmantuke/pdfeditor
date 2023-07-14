import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const AdvertisementBanner = () => {
  return (
    <Box
      bg="blue.500"
      color="white"
      p={4}
      roundedTop="md"
      mb={6}
      textAlign="center"
    >
      <Text fontSize="sm" fontWeight="bold" mb={1}>
        This site is FREE but it's powered by{' '}
        <a
          href="https://www.devheroes.co.tz/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          DevHeroes
        </a>
      </Text>
      <Text fontSize="sm">
        Say goodbye to manual timetabling and hello to efficiency and accuracy
        with our innovative technology.
      </Text>
    </Box>
  );
};

export default AdvertisementBanner;
