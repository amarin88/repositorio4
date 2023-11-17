import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Heading, Spacer, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
return (
    <div>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
            <Link to={"/"}>
            <Heading size='md'>La tiendita Crossfiter</Heading>
            </Link>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Menu>
                    <MenuButton as={Button} colorScheme='blue'>
                    Productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                        <Link to={`/category/cat1`}>
                            Categoria 1
                        </Link>
                        </MenuItem>
                        <MenuItem>
                        <Link to={`/category/cat2`}>
                            Categoria 2
                        </Link>
                        </MenuItem>                        
                        <MenuItem>
                        <Link to={`/category/cat3`}>
                            Categoria 3
                        </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Link to={"/cart"}>
                <Button colorScheme='blue'><CartWidget/></Button>
                </Link>
                
                
                
            </ButtonGroup>
        </Flex>
        
        
    </div>

    )
}



export default NavBar