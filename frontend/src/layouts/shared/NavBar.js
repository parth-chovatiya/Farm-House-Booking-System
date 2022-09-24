import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Input,
} from '@chakra-ui/react';
import { MoonIcon, Search2Icon, SunIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { UserContext } from '../../routes/MainRoute';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { loggedIn } = useContext(UserContext);
  // console.log(loggedIn);
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <InputGroup>
                <Input placeholder="Search Here..." />
                <InputRightElement
                  children={<Search2Icon color="green.500" />}
                />
              </InputGroup>

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              {true ? (
                <Flex alignItems={'center'}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}
                    >
                      <Avatar
                        size={'sm'}
                        src={
                          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>Help</MenuItem>
                      <MenuDivider />
                      <MenuItem>My Bookings</MenuItem>
                      <MenuItem>All Farms</MenuItem>
                      <MenuItem>View Ratins</MenuItem>
                      <MenuDivider />
                      <MenuItem>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              ) : (
                'login'
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
