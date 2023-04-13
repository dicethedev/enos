import React, {useRef} from "react";
import { 
     useDisclosure, 
     Flex, 
     Button,  
     VStack, 
    } from "@chakra-ui/react";
import DrawerBg from "./DrawerBg";
import { IoMdMenu } from 'react-icons/io';
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { navbar_data } from "../../utils/navbarData";
import { nanoid } from "nanoid";


export default function MobileDrawer() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    // let navigate = useNavigate();

return (
    <Flex justify="center" alignItems="center">
      <Button ref={btnRef} onClick={onOpen} bg="none" color="#6600BA" _hover={{ bg: "none", boxShadow: "none" }}>
        <IoMdMenu size="40px"  />
      </Button>
      
      <DrawerBg
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <VStack alignItems="left">
          {navbar_data.map((item) => (
            <Link key={nanoid()} to={item.link}>
              <Button variant='text' fontWeight="400"> {item.name} </Button>
            </Link>
          ))}
        
        </VStack>
      </DrawerBg>
    </Flex>
  );
};