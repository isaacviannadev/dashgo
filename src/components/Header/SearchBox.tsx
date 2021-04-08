import { Flex, Input, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBox() {
  return (
    <Flex
      as='label'
      flex='1'
      py='4'
      px='8'
      ml='6'
      maxWidth={400}
      alignSelf='center'
      color='gray.200'
      position='relative'
      bg='gray.800'
      rounded='full'
    >
      <Input
        color='gray.50'
        variant='unstyled'
        px='4'
        mr='4'
        placeholder='Buscar na plataforma'
        _placeholder={{
          color: 'gray.400',
        }}
      />
      <Icon as={FiSearch} fontSize='20' />
    </Flex>
  );
}
