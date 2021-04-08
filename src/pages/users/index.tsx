import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' rounded={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
            </Heading>

            <Link href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Isaac Vianna</Text>
                    <Text fontSize={['xs', 'sm']} color='gray.300'>
                      isaacsvianna@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de Abril, 2021</Td>}
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    colorScheme='blue'
                    leftIcon={<Icon as={RiPencilLine} fontSize='20' />}
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Isaac Vianna</Text>
                    <Text fontSize={['xs', 'sm']} color='gray.300'>
                      isaacsvianna@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de Abril, 2021</Td>}
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    colorScheme='blue'
                    leftIcon={<Icon as={RiPencilLine} fontSize='20' />}
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Isaac Vianna</Text>
                    <Text fontSize={['xs', 'sm']} color='gray.300'>
                      isaacsvianna@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de Abril, 2021</Td>}
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    colorScheme='blue'
                    leftIcon={<Icon as={RiPencilLine} fontSize='20' />}
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
