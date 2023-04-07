import {  
  Flex,
  Button, 
  HStack, 
  chakra,  
  useBreakpointValue, 
  Text,
  Spinner
} from '@chakra-ui/react';
import { Suspense, lazy } from 'react';
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import {navbar_data} from '../../utils/navbarData';
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import MobileDrawer from "../mobileDrawer/MobileDrawer";

const BuyButton = lazy(() => import("../navbar/BuyButton/index"));

const Navbar = () => {

      // let navigate = useNavigate();

      const isDesktop = useBreakpointValue({ base: false, lg: true })
      const { visible } = useNavbarStyles();
      const lastScrollTop = useRef(0);

      const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    
      useEffect(() => {
        window.addEventListener(
          "scroll",
          () => {
            var { pageYOffset } = window;
            if (pageYOffset > lastScrollTop.current) {
              // downward scroll
              setIsNavbarVisible(false);
            } else if (pageYOffset < lastScrollTop.current) {
              // upward scroll
              setIsNavbarVisible(true);
            } // else was horizontal scroll
            lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
          },
          { passive: true }
        );
      }, []);

  return (
    <chakra.header id="header">
      <Flex
        alignItems="center"
        justify="space-between"
        bg="#0B0B0B"
        position= "fixed"
        top={0}
        left={0}
        boxShadow="0 2px 10px #4ca5ff"
        // p="0px 20px"
        p="20px 100px"
        width="100%"
        height="100px"
        zIndex="1000"
        translateY="0 -72px"
        transition="0.3s"
        className={`${isNavbarVisible ? {visible} : ""}`}
      >
       <Link to="/">
        <Flex flexDir="column" alignItems="center" color="white">
         <Text fontFamily="Cantarell" fontWeight="700" fontSize="24px" letterSpacing="5px">Enos</Text>
         <Text fontSize="18px">Coin</Text>
        </Flex>
      </Link>    
     
        {isDesktop ? (
            <>
             <HStack as="nav" spacing="5">
             {navbar_data.map((item) => (
               <Link key={nanoid()} to={item.link}
               >
                 <Button variant="nav" 
                 fontWeight={500} color="#3482FF"
                  fontSize="18px"
                  _focus={{ color: "ctaBg", fontWeight: "600" }}
                  > {item.name} </Button>
               </Link>
             ))}
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
           </HStack>
           </>
          ) : (
            <MobileDrawer />
          )} 
        
      </Flex>
    </chakra.header>
  );
}

export default Navbar;

export const useNavbarStyles = () => {
    return {
        logoFont: {
           fontSize: "22px",
           fontWeight: "600",
           lineHeight: "36px",
        },
        ctaFont: {
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0.1px",
            color: "white",
        },
        visible: {
          top: "0",
          translate: "0"
        }
    }
}