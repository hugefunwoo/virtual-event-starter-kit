import { Box, Image, Text, Link, Heading } from '@chakra-ui/react';
import * as React from 'react';

export const ListItem = props => {
  const { id, title, subTitle, description, featured_image } = props;

  return (
    <Box p={4} display={{ md: 'flex' }}>
      <Box flexShrink={0}>
        <Image borderRadius="lg" width={{ md: 40 }} src={featured_image} alt={description} />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href={`https://womany.net/read/article/${id}`}
        >
          <Heading as="h3" fontSize="xl">
            {title}
          </Heading>
        </Link>
        <Text mt={2} color="gray.500">
          {description}
        </Text>
      </Box>
    </Box>
  );
};
