import {Button, Flex,FormControl, FormLabel, Heading, InputGroup,
    InputRightElement,Input,Alert,AlertIcon} from "@chakra-ui/react";
import validator from 'validator';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [show, setShow]=useState(false)
    const handleClick=()=> setShow(!show)
    const [user, setUser]=useState("");
    const [password, setPassword]=useState("");
    const [userData, setUserData]=useState({});
    const [errorcheck,setError]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
     const getData=sessionStorage.getItem('user');
     const data=JSON.parse(getData)
     setUserData(data)
    
    },[])

console.log(userData.password)
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validator.isEmpty(user&&password)){
            setError('fill it')
        }
        else if (sessionStorage.getItem('user')===null) {
            setError('no user go and register')
        } else if(!validator.equals(user, userData.username) || !validator.equals(password,userData.password)){
            setError("in correct usernme or password")   
        }else{
            navigate('/dashboard')
        }
    }
    return ( 
        <Flex
       flexDirection="column"
      alignItems="center"
       w={["90%","50%"]}
       m={"0 auto"}
       border="1px solid #ddd"
       borderRadius="5px"
       mt="50px"
       p="10px"
       as="form"
       gap={'10px'}
       height='100vh'
       onSubmit={handleSubmit}
       >
           <Heading>Login</Heading>
       <FormControl size={['sm','md']}>
             <FormLabel>Username</FormLabel>
             <Input name={'username'} type={"text"} 
             placeholder={"username"}
             value={user}
             onChange={(user)=>setUser(user.target.value)}
              />
         </FormControl>
         <FormControl size={['sm','md']}>
             <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input name={'password'} 
            type={show ? "text" :"password"}
            onChange={(pass)=>setPassword(pass.target.value)}
              placeholder={"password"}
              />
              <InputRightElement width='4.5rem'>
                  <Button h='1.7rem'
                   size='sm'
                   onClick={handleClick}
                  >{show ? 'Hide' : 'Show'}</Button>
              </InputRightElement>
            </InputGroup>
            {errorcheck &&<Alert status="error">
            <AlertIcon />
           {errorcheck} 
         </Alert>}
         </FormControl>
         <Button  colorScheme="twitter" mt="10px" type={'submit'}>submit</Button>
       </Flex>
     );
}
 
export default Login;