import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import Logo from './Logo';
import SearchBox from './SearchBox';
import NotificationNav from './NotificationNav';
import Profile from './Profile';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px={['4', '6']}
      align='center'
    >
      {!isWideVersion && (
        <IconButton
          aria-label='Open Navigation'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align='center' ml='auto'>
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
