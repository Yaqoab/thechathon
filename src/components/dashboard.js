//import { Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import {
    Flex,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
    Tfoot,
    Button,
  } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const [user, setUser]=useState({});
    useEffect(()=>{
        const getData=sessionStorage.getItem('user');
        const data=JSON.parse(getData)
        setUser(data)
       
       },[])
    return ( 
        <Flex height='100vh' mt='30px'>
       
      <TableContainer m='0 auto'>
          <Heading fontSize='20px'>Dashboard</Heading>
  <Table variant='striped' colorScheme='gray'>
    <Thead>
      <Tr>
        <Th>Tiitle</Th>
        <Th>info</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>FirstName:</Td>
        <Td>{user.firstname}</Td>
      </Tr>
      <Tr>
        <Td>SurName:</Td>
        <Td>{user.secondname}</Td>
      </Tr>
      <Tr>
        <Td>UserName:</Td>
        <Td>{user.username}</Td>
      </Tr>
      <Tr>
          <Td>Track:</Td>
          <Td>{user.track}</Td>
      </Tr>
      <Tr>
          <Td>BirthDate:</Td>
          <td>{user.birthdate}</td>
      </Tr>
      <Tr>
          <Td>Gender:</Td>
          <td>{user.gender}</td>
      </Tr>
    </Tbody>
    <Tfoot>
        <Button colorScheme="twitter"><Link to="/">logout</Link> </Button>
    </Tfoot>
  </Table>
</TableContainer>
      </Flex>
     );
}
 
export default DashBoard;