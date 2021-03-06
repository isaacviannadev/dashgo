import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Isaac Vianna</Text>
          <Text color='gray.300' fontSize='small'>
            isaacsvianna@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size='md'
        name='Isaac Vianna'
        src='https://github.com/isaacviannadev.png'
      />
    </Flex>
  );
}
