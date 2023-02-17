
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


export default function Login(){
  const  { loginUser, isAuth } = useContext(AuthContext)
  const [show, setShow] = React.useState(false)
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [data,setData] = useState(false)
  const [err,setErr] = useState(false);
    const [upload,setUpload] = useState(false)
  const navigate = useNavigate()
  const handleClick = () => setShow(!show)

  const handleSubmit = async(e) => {
    e.preventDefault()
    setUpload(false)
    setErr(false)
    try{
     let res = await fetch(`https://sync-assign.onrender.com/user?email=${email}&password=${password}`);

     let data = await res.json();
     if(data.length == 1){
      
        loginUser( data[0].name,"abdggd545sdsd");
        setUpload(true)
        setTimeout(() => {navigate("/dashboard")}, 2000)
   
     }else if(data.length == 0){
        setErr(true)
     }
      
    }catch(err){
      console.log(err)
      setErr(true)
    }

  }
        
 
    
    return (
      <SimpleGrid pl='35%' pt='10%' pr='35%' justifyContent='center'>
        {
                err == true ? <Alert status='error'>
                <AlertIcon />
                <AlertTitle>invalid credentials</AlertTitle>
                <AlertDescription>Try again.</AlertDescription>
              </Alert> : ""
            }
            {
                upload==true ?<Alert status='success' variant='subtle'>
                <AlertIcon />
               Login successful!
              </Alert> :""

            }
            <Text fontSize='3xl' fontWeight='600' textAlign='center'>Login</Text>
          <form onSubmit={handleSubmit}>
        <FormControl isRequired>
            <FormLabel
            >Email</FormLabel>
            <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                onChange={(e)=>setPassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
            </InputGroup>
                </FormControl>
                <Button
                w='20rem'
            mt={4}
            colorScheme='green'
            
            type='submit'
          >
           Login
          </Button>
          </form>
          <Link to='/signup'>
          <Button _hover='none' color='white' bgColor='black'  mt='1rem' w='20rem'>Sign up</Button>
          </Link>
                    
        </SimpleGrid>
    )
}