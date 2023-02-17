import { Button, Card, CardBody, CardFooter, Grid, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Context/AuthContext";


export default function Dashboard(){
    const  { name} = useContext(AuthContext)
    return (
        <SimpleGrid>
            <Navbar/>
            <Grid p='4rem'>
                <Link to='/mapview'>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://static-ai.asianetnews.com/images/9457e854-fe6e-4dcd-bdc0-4a84912ae429/image_710x400xt.jpg'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                    <Heading size='md'>The Indain Map</Heading>
                     <Text color='green' fontWeight='600'>Check your current location</Text>
                    <Text py='2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit. Eveniet at, dolore deleniti illum mollitia consectetur iusto libero modi autem similique possimus dicta. Error ducimus natus iste ad quam. Tempora laborum, voluptatem veniam facilis eaque asperiores voluptate iure temporibus doloribus dicta impedit, nesciunt ratione possimus? Aliquid distinctio repudiandae quidem.
                    </Text>
                    </CardBody>

                </Stack>
                </Card>
                </Link>
            </Grid>
                
        </SimpleGrid>
    )
}