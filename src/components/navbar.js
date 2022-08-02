import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import {NavLink } from "react-router-dom";

const Navbar = () => {
   const active={
    color:'black', 
    background:'white', 
    padding:'2px',
    borderRadius:'5px'
   }
   const not={
    color:'white',  padding:'3px'
   }
    return ( 
        <>
        <Flex 
         p='10px'
         bg='#546d76'
         color='#fff'
        >
          <Heading fontSize={['18px','21px']}>TechaThon</Heading>
          <Spacer />
          <HStack >
            
          <NavLink to="/" p='10px' style={({isActive})=>isActive ? active : not }>Home</NavLink>
          <NavLink to="/register" style={({isActive})=>isActive ? active : not }>Register</NavLink>
          <NavLink to="/login" style={({isActive})=>isActive ? active : not }>Login</NavLink>
          </HStack>
        </Flex>
       </>
     );
}
 
export default Navbar;