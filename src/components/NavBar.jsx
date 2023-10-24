import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Heading, Spacer, ButtonGroup, Button } from '@chakra-ui/react'

const NavBar = () => {
return (
    <div>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
            <Heading size='md'>La tiendita Crossfiter</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Menu>
                    <MenuButton as={Button} colorScheme='green'>
                    Productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Zapatillas</MenuItem>
                        <MenuItem>Indumentaria</MenuItem>
                        <MenuItem>Accesorios</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Button colorScheme='green'><CartWidget/></Button>
                
                
            </ButtonGroup>
        </Flex>
        
        
    </div>

    )
}



export default NavBar