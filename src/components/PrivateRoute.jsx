import { Button, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return (
         <SimpleGrid justifyContent='center' pt='4rem'>
            <Grid justifyContent='center'> <Link to='/'><Button colorScheme='blue'> 
            Login
                </Button></Link></Grid>
             <Text fontSize='5rem' color='red'>User not logged in</Text>
           
         </SimpleGrid>
    )
  }
  return children;
}

export default PrivateRoute;
