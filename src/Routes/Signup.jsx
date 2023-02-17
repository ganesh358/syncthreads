import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function Signup(){
    const [show, setShow] = React.useState(false)
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [err,setErr] = useState(false);
    const [upload,setUpload] = useState(false)
    const navigate = useNavigate()
    const handleClick = () => setShow(!show)
     
  
    const handleSubmit = async(e) => {
        e.preventDefault()
        setErr(false)
        setUpload(false)

        try{
            let res = await fetch(`https://sync-assign.onrender.com/user?email=${email}`);
       
            let data = await res.json();
            if(data.length == 1){
                setErr(true)
               
            }else if(data.length == 0){
                const payload = {
                    name,
                    email,
                    password
        
                }
        
                fetch("https://sync-assign.onrender.com/user",{
                    method : "POST",
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body : JSON.stringify(payload)
                })
                .then((res) => res.json())
                .then((res) => {console.log(res);setUpload(true);
                    setTimeout(() => {navigate("/")}, 3000)
                } )
                .catch((err) => console.log(err))
            }
             
           }catch(err){
             console.log(err)
           }
       
        }
    
           
    
    
    return (
        <SimpleGrid pl='35%' pt='10%' pr='35%' justifyContent='center'>
            {
                err == true ? <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Email already exists!</AlertTitle>
                <AlertDescription>Try another email.</AlertDescription>
              </Alert> : ""
            }
            {
                upload==true ?<Alert status='success' variant='subtle'>
                <AlertIcon />
                Sign up successful!
              </Alert> :""

            }
            <Text fontSize='3xl' fontWeight='600' textAlign='center'>Signup</Text>
           <form onSubmit={handleSubmit}>
         <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder='Name' onChange={(e)=>setName(e.target.value)} />
            <FormLabel
            >Email</FormLabel>
            <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
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
            Sign up
          </Button>
          </form>
          <Link to='/'>
          <Button _hover='none' color='white' bgColor='black'  mt='1rem' w='20rem'>Login</Button>
          </Link>
                    
        </SimpleGrid>
    )
}








