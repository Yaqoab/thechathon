import {Box,Button, Heading, Text}  from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <Box p='10px' textAlign='center' w={['90%','400px']} m='0 auto' height='100vh' >
            <Heading fontSize={['18px','20px']}>Techathon community</Heading>
         <Text>Mentorship and open source 
             community we provide you with the 
             right resources you need to make 
             your journey in tech smooth, iclusive and fun </Text>
             <Heading fontSize={['18px','20px']}>React js class</Heading>
             <Text>this is react js class second assignment 
                 register to login and display your details in dashbord</Text>
             <Button colorScheme={'twitter'} mt='10px'><Link to='/register'>Register</Link></Button>
        </Box>
     );
}
 
export default Home;