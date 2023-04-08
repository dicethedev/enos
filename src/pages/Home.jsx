import React, {Suspense, useState} from 'react'
import {Box, 
 Flex,
 HStack,
 Spinner,
 Heading,
 Image,
 Button,
 useBreakpointValue,
 Stack,
 Text
} from '@chakra-ui/react'
import Navbar from '../components/navbar/Navbar'
import Container from '../components/Container'
import enosCoinPng from '../assets/enoscoin.jpg'

// const BuyButton = lazy(() => import("../components/navbar/BuyButton/index"));

const Home = () => {

    const { root, homeBg } = useStyles();
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box w={"100%"}>
      <Navbar />

      <Box w={"100%"} {...root}>
      <Flex bgRepeat="no-repeat" bgSize="cover" bgImage="url('/images/enoscoin.mp4')" bgColor="black">
      <Container>
        <Flex {...homeBg} id="home">
              {/*  ------------------------------------------- WELCOME HOME TEXT AREA ---------------------------------------------- */}
              <Flex w={"100%"} align="center" flexDirection={isMobile ? "column" : "row"} py={"7%"} justify="space-between"
              >
               <HStack  justifyContent="center" alignItems="center"
               pt={isMobile ? "40px" : ""}
               >
                <Image src={enosCoinPng} width={isMobile ? "350px" :"510px"} height={isMobile ? "350px" : "515px"} />
                </HStack>
                 
                <Flex flexDir="column">
                 <Heading textAlign="center" color="white" 
                   className="animate__animated animate__backInUp"
                   pt={isMobile ? "20px" : ""}
                   fontSize={isMobile ? "100px" : "130px"} letterSpacing="20px"
                   >
                    ENOS
                 </Heading>
                 <Heading textAlign="center" color="white" 
                   className="animate__animated animate__backInUp"
                   fontSize={isMobile ? "100px" : "130px"} letterSpacing="20px"
                   >
                    COIN
                 </Heading>

                 <Suspense fallback={<Spinner size="sm" />}>
                 <Button
                    variant="solid"
                    bg={isClicked ? "#398DDB" : "#F5A623"}
                    fontWeight="bold"
                    fontSize="2xl"
                    width="60%"
                    height="80px"
                    borderRadius="20px"
                    boxShadow={isHovering ? "xl" : "none"}
                    transition="all 0.3s"
                    mt="60px"
                    _hover={{
                     transform: "translateY(-6px)",
                        boxShadow: "xl",
                    }}
                    onClick={() => setIsClicked(!isClicked)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                     {isClicked ? "ROCK ON!🤘" : "Buy Now"}
                    </Button>
                  </Suspense>
                </Flex>
                <Flex>
                </Flex>
             </Flex>
        </Flex>
        </Container>
      </Flex>

            
     <Flex bgColor="black" flexDir="column">
     <Stack bgRepeat="no-repeat" bgSize="cover">
        <Container>
            <Flex w={"100%"} align="center" flexDir={"column"} pt="60px">
                <Box p="80px 100px" borderRadius="50px"
                    backgroundClip={`"content-box", "border-box"`}
                    style={{ backgroundImage: 'linear-gradient(96.94deg, #F5A623 0%, #398DDB 16.81%, #F5A623 33.63%)',
                     backgroundOrigin: "border-box",
                     border: "4px solid transparent",
                     boxShadow: "rgba(240, 239, 253, 1) 1px 1000px 1px inset",
                  }}
                  bgColor="white"
                >
                  <Flex justify="space-between" direction="row">
                    <Flex flexDir="column">
                      <Text>Blessing</Text>
                    </Flex>

                    <Flex>
                     <Text>Blessing</Text>
                    </Flex>
                  </Flex>
                </Box>
            </Flex>
        </Container>
      </Stack>
      </Flex>
      </Box>
    </Box>
  )
}

export default Home

const useStyles = () => {
    return {
      root: {
        backgroundColor: "black",
      },
      homeBg: {
          w: "100%",
          h: "100%",
          pt: "100px",
          px: {
            base: "0%",
            md: "5%",
          },
      },
    homeBox: {
        h: "550px",
        w: "100%",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        pt: "100px",
        px: {
          base: "0%",
          md: "5%",
        },
        mb: "30px"
      },
      outerBox: {
        bg: "transparent",
        h: "300px",
        w: "100%",
        justify: "space-between",
      },
    }
}
