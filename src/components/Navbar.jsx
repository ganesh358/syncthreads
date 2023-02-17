import { Flex, Grid, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from "../Context/AuthContext";

export default function Navbar(){
    const  { name,logoutUser} = useContext(AuthContext)
    return (
        <Flex boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' p='1rem' justifyContent='space-between'>
            <Text fontSize='3xl' color='green' fontWeight='700'>Maps Dashboard</Text>
            <Grid  justifyContent='center'>
                <Grid  fontSize='2xl' color='teal' justifyContent='center'>
                <Menu  isLazy>
                <MenuButton><FaUserCircle/></MenuButton>
                <MenuList  >
                    <MenuItem onClick={logoutUser} fontSize='1rem'>Logout</MenuItem>
                </MenuList>
                </Menu>
                </Grid>
                <Text  fontWeight='600'>{name.toUpperCase()}</Text>
            </Grid>
        </Flex>
    )
}