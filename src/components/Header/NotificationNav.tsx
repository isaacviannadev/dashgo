import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiBell, FiUserPlus } from 'react-icons/fi';

export default function NotificationNav() {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py='1'
      color='gray.300'
      borderRightWidth={1}
      borderColor='gray.700'
    >
      <Icon as={FiBell} />
      <Icon as={FiUserPlus} />
    </HStack>
  );
}
