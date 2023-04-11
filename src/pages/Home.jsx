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
 Text,
 Divider
} from '@chakra-ui/react'
import Navbar from '../components/navbar/Navbar'
import Container from '../components/Container'
import enosCoinPng from '../assets/enoscoin.jpg'
import enosSpaceImg from '../assets/enosspace.jpg'

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
                    color="white"
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

    
     
      <Box w={"100%"} {...root}>
     <Flex bgColor="black" flexDir="column">
        <Container>
            <Flex w={"100%"} flexDir={"column"} {...homeBg}>
                <Box p="30px 100px" borderRadius="50px"
                //     backgroundClip={`"content-box", "border-box"`}
                //     style={{ backgroundImage: 'linear-gradient(96.94deg, #F5A623 0%, #398DDB 16.81%, #F5A623 33.63%)',
                //      backgroundOrigin: "border-box",
                //      border: "4px solid transparent",
                //      boxShadow: "rgba(240, 239, 253, 1) 1px 1000px 1px inset",
                //   }}
                  bgColor="white"
                >
                  <HStack justify="space-between" flexDirection={isMobile ? "column" : "row"}>
                    <Stack flexDir={"column"} pt="40px" 
                    alignItems={isMobile ? "center" : ""}
                    >
                        <Heading fontSize={isMobile ? "25px" :"40px"} fontWeight="500" color="#f89e52" mb="20px">Enos Coin</Heading>
                        <Heading fontSize={isMobile ? "40px" : "80px"} fontWeight="700" pb="15px">About Enos</Heading>
                        <Heading opacity="0.5" fontSize={isMobile ? "18px" :"21px"} color="#5f5f71"
                        width={isMobile ? "100%" : "80%"}
                        pb="40px"
                        >Ham, a chimpanzee also known as Ham the Chimp and Ham the Astrochimp, 
                         was the first Great Ape launched into space on January 31, 1961.
                        </Heading>

                        <Heading opacity="0.5" fontSize={isMobile ? "18px" :"21px"} color="#5f5f71"
                        width={isMobile ? "100%" : "80%"}
                        pb="24px"
                        >
                        On January 31, 1961, Ham flew a suborbital flight on the
                        Mercury-Redstone 2 mission, part of the U.S. space program's 
                        Project Mercury. Ham's name is an acronym for the laboratory
                        that prepared him for his historic mission—the Holloman Aerospace Medical Center, located at Holloman Air Force Base in New Mexico, southwest of Alamogordo.
                        His name was also in honor of the commander of Holloman Aeromedical 
                        Laboratory, Lieutenant Colonel Hamilton "Ham" Blackshear.
                        </Heading>


                        <Divider width="80%" height="1.5px" bg="radial-gradient(circle, rgba(196, 208, 217, 1) 0%, rgba(218, 226, 233, 0.44021358543417366) 100%)" />
                        
                        <Flex pt="20px" flexDir={isMobile ? "column" : "row" }
                          justify={isMobile ? "center" : "center" }
                          alignItems="center" w={isMobile ? "100%" :"80%"}>
                            <Text color="#0b0b0b" width="55%" fontSize={isMobile ? "16px" : "18px" } 
                             fontWeight="500"
                             mb={isMobile ? "20px" : "" }
                             >
                              Join Community
                            </Text>


                <Suspense fallback={<Spinner size="sm" />}>
                 <Button
                    variant="solid"
                    bg={isClicked ? "#F5A623" : "#398DDB"}
                    fontWeight="bold"
                    fontSize={isMobile ? "18px" : "20px" } 
                    width={isMobile ? "100%" :"50%"}
                    height="80px"
                    borderRadius="20px"
                    color="white"
                    boxShadow={isHovering ? "xl" : "none"}
                    transition="all 0.3s"
                    _hover={{
                     transform: "translateY(-6px)",
                        boxShadow: "xl",
                    }}
                    onClick={() => setIsClicked(!isClicked)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                     {isClicked ? "Welcome Member!🤘" : "JOIN TELEGRAM"}
                    </Button>
                  </Suspense>
                        </Flex>
                    
                    </Stack>

                    <Flex pt={isMobile ? "40px" : ""}>
                       <Image src={enosSpaceImg} alt="" maxWidth={isMobile ? "200px" : "500px"} />
                    </Flex>

                  </HStack>
                </Box>
            </Flex>
        </Container>
      </Flex>
      </Box>
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
