import { Flex, HStack, Text } from "@chakra-ui/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram
}from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <Flex 
        flexDirection="column"
        alignItems="center"
        bg="#0c1e42"
            color="white"
            p="30px"
            textAlign="center"
        w='100%'
         h='80px' >
            <HStack  spacing={4} fontSize="25px" display={["inline-flex","flex"]} >
             <FontAwesomeIcon icon={faFacebook} />
             <FontAwesomeIcon icon={faTwitter}  />
             <FontAwesomeIcon icon={faInstagram} />
                 </HStack>
                 <Text> Designed by Yaqoab Abdulmalik </Text>
        </Flex>
     );
}
 
export default Footer;