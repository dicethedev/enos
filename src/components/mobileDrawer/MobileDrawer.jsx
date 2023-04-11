import React, {useRef} from "react";
import { 
     useDisclosure, 
     Flex, 
     Button,  
     VStack, 
     Spinner
    } from "@chakra-ui/react";
import DrawerBg from "./DrawerBg";
import { IoMdMenu } from 'react-icons/io';
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { navbar_data } from "../../utils/navbarData";
import { nanoid } from "nanoid";

import { Suspense, lazy } from 'react';
const BuyButton = lazy(() => import("../navbar/BuyButton/index"));

export default function MobileDrawer() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    // let navigate = useNavigate();

return (
    <Flex justify="center" alignItems="center">
      <Suspense fallback={<Spinner size="sm" />}>
            <BuyButton
              name={"Buy Now"}
              rest={{
                 width: ["150px"],
                 height: ["70px"],
                mt: { base: null, md: "10px" },
                color: "white",
                bg: "#488eff",
                fontWeight: "500",
                fontSize: "16px",
              }}
            />
          </Suspense>
      <Button ref={btnRef} onClick={onOpen} bg="none" color="blue.400" _hover={{ bg: "none" }}>
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