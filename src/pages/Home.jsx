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
 Divider,
 SimpleGrid,
 FormControl, 
 Input, 
 Textarea,
} from '@chakra-ui/react'
import Navbar from '../components/navbar/Navbar'
import Container from '../components/Container'
import enosCoinPng from '../assets/enoscoin.jpg'
import enosSpaceImg from '../assets/enosspace.jpg'
import fireIcon from '../assets/fire.png'
import whaleIcon from '../assets/whale2.png'
import TeamIcon from '../assets/team.png'
import safeIcon from '../assets/safe.png'
import number1 from '../assets/number-1.png'
import number2 from '../assets/number-2.png'
import number3 from '../assets/number-3.png'
import Footer from '../components/Footer'
// const BuyButton = lazy(() => import("../components/navbar/BuyButton/index"));

const Home = () => {

    const { root, homeBg } = useStyles();
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  return (
    <>
    <Box w={"100%"}>
      <Navbar />

      <Box w={"100%"} {...root}>
      <Flex bgRepeat="no-repeat" bgSize="cover" bgImage="url('/images/enoscoin.mp4')"
       bgColor="#06053e">
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
                    bg={isClicked ? "#6600BA" : "#F27248"}
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
      </Box>

      <Box w={"100%"} {...root}>
       <Flex bgColor="#06053e" flexDir="column">
        <Container>
            <Flex w={"100%"} flexDir={"column"} {...homeBg}  id="about">
                <Box p="30px 100px" borderRadius="50px"bgColor="#F0EBFF">
                  <HStack justify="space-between" flexDirection={isMobile ? "column" : "row"}>
                    <Stack flexDir={"column"} pt="40px" 
                    alignItems={isMobile ? "center" : ""}
                    >
                        <Heading fontSize={isMobile ? "25px" :"40px"} fontWeight="500" color="#f89e52" mb="20px">Enos Coin</Heading>
                        <Heading fontSize={isMobile ? "30px" : "80px"} fontWeight="700" pb="15px">About Enos</Heading>
                        <Text opacity="0.5" fontSize={isMobile ? "18px" :"21px"} color="#5f5f71"
                        width={isMobile ? "100%" : "80%"}
                        pb="40px" fontWeight={600}
                        >Ham, a chimpanzee also known as Ham the Chimp and Ham the Astrochimp, 
                         was the first Great Ape launched into space on January 31, 1961.
                        </Text>

                        <Text opacity="0.5" fontSize={isMobile ? "18px" :"21px"} color="#5f5f71"
                        width={isMobile ? "100%" : "80%"}
                        pb="24px" fontWeight={600}
                        >
                        On January 31, 1961, Ham flew a suborbital flight on the
                        Mercury-Redstone 2 mission, part of the U.S. space program's 
                        Project Mercury. Ham's name is an acronym for the laboratory
                        that prepared him for his historic mission—the Holloman Aerospace Medical Center, located at Holloman Air Force Base in New Mexico, southwest of Alamogordo.
                        His name was also in honor of the commander of Holloman Aeromedical 
                        Laboratory, Lieutenant Colonel Hamilton "Ham" Blackshear.
                        </Text>


                        <Divider width="80%" height="1.5px" bg="radial-gradient(circle, rgba(196, 208, 217, 1) 0%, rgba(218, 226, 233, 0.44021358543417366) 100%)" />
                        
                        <HStack pt="20px" flexDir={isMobile ? "column" : "row" }
                          alignItems="center" w={isMobile ? "100%" :"80%"}
                        justify="space-between"
                          >
                            <Flex>
                            <Text color="#0b0b0b" fontSize={isMobile ? "16px" : "18px" } 
                             fontWeight="500"
                             mb={isMobile ? "20px" : "" }
                             >
                              Join Community
                            </Text>
                            </Flex>


                <Suspense fallback={<Spinner size="sm" />}>
                 <Button
                    variant="solid"
                    bg={isClicked ? "#6600BA" : "#F27248"}
                    fontWeight="bold"
                    fontSize={isMobile ? "18px" : "20px" } 
                    width={isMobile ? "100%" :"55%"}
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
                        </HStack>
                    
                    </Stack>

                    <Flex pt={isMobile ? "40px" : ""}>
                       <Image src={enosSpaceImg} alt="" maxWidth={isMobile ? "200px" : "400px"} />
                    </Flex>

                  </HStack>
                </Box>


                <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} pt="60px">
                  <Box bg='white' 
                   width="100%"
                   height='100%'
                   boxShadow="0px 15px 30px rgba(61, 90, 125, 0.08)"
                   textAlign="center"
                   borderRadius="20px"
                   transition=".3s linear"
                   p="43px 30px 49px"
                  >
                    <Stack
                     width="87px"
                     height="87px"
                     margin="0 auto 35px"
                     pos="relative"
                     zIndex="1"
                     transition=".3s linear"
                     display="flex"
                     alignItems="center"
                     justifyContent="center"
                     _hover={{ transform: "scale(1.2)" }}
                     _focus={{ outline: "none" }}
                     _before={{
                        content: "''",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: "100%",
                        height: "100%",
                        bg: "#fff2e4",
                        borderRadius: "50%",
                        zIndex: "-1",
                      }}
                    >
                     <Image src={fireIcon} alt="" width="70px" height="70px" />
                    </Stack>

                    <Stack>
                        <Heading fontSize="24px" fontWeight="700">Buy Back & Burn</Heading>
                        <Text opacity="0.7" color="#6b645d" fontSize="20px">
                         We will conduct buy back and burn, reducing supply and driving up the price of the chart.
                        Regular buy back and burn will be conducted when the chart needs it.
                        </Text>
                    </Stack>
                  </Box>

                  <Box bg='white' 
                   width="100%"
                   height='100%'
                   boxShadow="0px 15px 30px rgba(61, 90, 125, 0.08)"
                   textAlign="center"
                   borderRadius="20px"
                   transition=".3s linear"
                   p="43px 30px 49px"
                  >
                    <Stack
                     width="87px"
                     height="87px"
                     margin="0 auto 35px"
                     pos="relative"
                     zIndex="1"
                     transition=".3s linear"
                     display="flex"
                     alignItems="center"
                     justifyContent="center"
                     _hover={{ transform: "scale(1.2)" }}
                     _focus={{ outline: "none" }}
                     _before={{
                        content: "''",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: "100%",
                        height: "100%",
                        bg: "#f0ebff",
                        borderRadius: "50%",
                        zIndex: "-1",
                      }}
                    >
                     <Image src={whaleIcon} alt="" width="70px" height="70px" />
                    </Stack>

                    <Stack>
                        <Heading fontSize="24px" fontWeight="700">Anti Whale Measures</Heading>
                        <Text opacity="0.7" color="#6b645d" fontSize="20px">
                         We will take all possible measures to support our chart and build a healthy chart,
                         for this we will be keeping max wallet of 3% of the total supply and a max transaction of 
                         2% at a time. This will prevent dumping our chart by whales.
                        </Text>
                    </Stack>
                  </Box>

                  <Box bg='white' 
                   width="100%"
                   height='100%'
                   boxShadow="0px 15px 30px rgba(61, 90, 125, 0.08)"
                   textAlign="center"
                   borderRadius="20px"
                   transition=".3s linear"
                   p="43px 30px 49px"
                  >
                    <Stack
                     width="87px"
                     height="87px"
                     margin="0 auto 35px"
                     pos="relative"
                     zIndex="1"
                     transition=".3s linear"
                     display="flex"
                     alignItems="center"
                     justifyContent="center"
                     _hover={{ transform: "scale(1.2)" }}
                     _focus={{ outline: "none" }}
                     _before={{
                        content: "''",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: "100%",
                        height: "100%",
                        bg: "#edeef1",
                        borderRadius: "50%",
                        zIndex: "-1",
                      }}
                    >
                     <Image src={TeamIcon} alt="" width="70px" height="70px" />
                    </Stack>

                    <Stack>
                        <Heading fontSize="24px" fontWeight="700">Experienced Team</Heading>
                        <Text opacity="0.7" color="#6b645d" fontSize="20px">
                         Our team is built by experienced developers
                         and marketing advisors from successful projects
                         back in 2020.
                        </Text>
                    </Stack>
                  </Box>

                  <Box bg='white' 
                   width="100%"
                   height='100%'
                   boxShadow="0px 15px 30px rgba(61, 90, 125, 0.08)"
                   textAlign="center"
                   borderRadius="20px"
                   transition=".3s linear"
                   p="43px 30px 49px"
                  >
                    <Stack
                     width="87px"
                     height="87px"
                     margin="0 auto 35px"
                     pos="relative"
                     zIndex="1"
                     transition=".3s linear"
                     display="flex"
                     alignItems="center"
                     justifyContent="center"
                     _hover={{ transform: "scale(1.2)" }}
                     _focus={{ outline: "none" }}
                     _before={{
                        content: "''",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: "100%",
                        height: "100%",
                        bg: "#e4f1ff",
                        borderRadius: "50%",
                        zIndex: "-1",
                      }}
                    >
                     <Image src={safeIcon} alt="" width="70px" height="60px" />
                    </Stack>

                    <Stack>
                        <Heading fontSize="24px" fontWeight="700">SAFE</Heading>
                        <Text opacity="0.7" color="#6b645d" fontSize="20px">
                        Contract will be verified and renounced without
                        any hidden mint function.Liquidity will be
                        locked in a safe locker.
                        </Text>
                    </Stack>
                  </Box>

                </SimpleGrid>

                 
            </Flex>
        </Container>
      </Flex>
      </Box>

      <Box w={"100%"} {...root}>
       <Flex bgColor="#06053e" flexDir="column" pt="60px" id="tokenomics">
         <Container>
            <Flex w="100%" flexDir="column" {...homeBg}>
                <Flex alignItems="center" justifyContent="center" textAlign="center" flexDir="column">
                <Heading fontSize={isMobile ? "30px" :"50px"} color="#f497ff" letterSpacing="5px">Ready to get</Heading>
                <Heading fontSize={isMobile ? "30px" :"50px"} color="#3ca2f8" letterSpacing="6px">$ENOSCOIN?</Heading>
                </Flex>
                
            <SimpleGrid columns={[1, 2]} spacing={10} pt="60px">
                  <Box bg='white'
                   bgRepeat="no-repeat" 
                   bgSize="cover" 
                   bgImage="url('/images/background-7.jpg')" 
                   width="100%"
                   height='100%'
                   boxShadow="0px 15px 30px rgba(61, 90, 125, 0.08)"
                   textAlign="center"
                   borderRadius="20px"
                   transition=".3s linear"
                   p="43px 30px 49px"
                //    alignItems="center"
                //    justifyContent="center"
                  >
                    <Stack
                     transition=".3s linear"
                     _hover={{ transform: "scale(1.2)" }}
                     _focus={{ outline: "none" }}
                    >
                     <Image src={number1} alt="" width="150px" height="150px" />
                    </Stack>

                    <Stack> 
                        <Text fontSize="24px" fontWeight="600" color="white">Maximum Wallet: 4% - 400,000 Tokens</Text>
                        <Text fontSize="24px" fontWeight="600" color="white">Maximum Transactions: 2% - 200,000 Tokens</Text>
                        <Text fontSize="24px" fontWeight="600" color="white">Initial Supply: 10,000,000</Text>
                    </Stack>
                  </Box>   

                  <Box bg='white'
                   bgRepeat="no-repeat" 
                   bgSize="cover" 
                   bgImage="url('/images/background-7.jpg')" 
                   width="100%"
                   height='100%'
                   boxShadow="0px 15px 30px rgba(61, 90, 125, 0.08)"
                   textAlign="center"
                   borderRadius="20px"
                   transition=".3s linear"
                   p="43px 30px 49px"
                //    alignItems="center"
                //    justifyContent="center"
                  >
                    <Stack
                     transition=".3s linear"
                     _hover={{ transform: "scale(1.2)" }}
                     _focus={{ outline: "none" }}
                    >
                     <Image src={number2} alt="" width="150px" height="150px" />
                    </Stack>

                    <Stack> 
                        <Text fontSize="24px" fontWeight="600" color="white">Buy Tax: 5%</Text>
                        <Text fontSize="24px" fontWeight="600" color="white">Sell Tax: 5%</Text>
                    </Stack>
                  </Box> 


                  <Box bg='white'
                   bgRepeat="no-repeat" 
                   bgSize="cover" 
                   bgImage="url('/images/background-7.jpg')" 
                   width="100%"
                   height='100%'
                   boxShadow="0px 15px 30px rgba(61, 90, 125, 0.08)"
                   textAlign="center"
                   borderRadius="20px"
                   transition=".3s linear"
                   p="43px 30px 49px"
                //    alignItems="center"
                //    justifyContent="center"
                  >
                    <Stack
                     transition=".3s linear"
                     _hover={{ transform: "scale(1.2)" }}
                     _focus={{ outline: "none" }}
                    >
                     <Image src={number3} alt="" width="150px" height="150px" />
                    </Stack>

                    <Stack> 
                        <Text fontSize="24px" fontWeight="600" color="white">- 4% Marketing</Text>
                        <Text fontSize="24px" fontWeight="600" color="white">- 1% Development</Text>
                    </Stack>
                  </Box> 

                </SimpleGrid>
            </Flex>
         </Container>
       </Flex>
      </Box>

      <Box w={"100%"} {...root}>
      <Flex bgColor="#06053e" flexDir="column" pt="60px">
         <Container>
         <Flex w="100%" flexDir="column" {...homeBg} id="contactus">
          <HStack justify="space-between" flexDir={isMobile ? "column" : "row"}
            bg="#F0EBFF" p="40px" borderRadius="10px">
             <Stack mb={isMobile ? "30px" : "" }>
             <Heading fontSize={isMobile ? "20px" :"30px"} color="#f497ff" letterSpacing="4px">Contact Us</Heading>
             <Heading width={isMobile ? "100%" : "70%"}  fontSize={isMobile ? "20px" :"40px"} color="#3ca2f8" pb="20px">$ENOSCOIN community on making</Heading>
             <Text width={isMobile ? "100%" : "70%"} fontWeight="500" fontSize={isMobile ? "16px" :"18px"}>
             Ham The Astrochimp Is Formed By Every And Single One Of Its Members, All As One And Equally Important. The Magic Lies In The Unity As A Group.Join Ham The Astrochimp
              Community And Its Different Activities That Will Keep The Group And Its Members Active!
             </Text>
             </Stack>

            <Box bg="white" p={isMobile ? "30px 25px" : "62px 58px 44px"}
            borderRadius="20px" width="100%" 
            height="100%"
            boxShadow="0px 15px 30px rgba(61, 90, 125, 0.08)"
            border="1px solid #f3f3f3"
            >
             <Text mb="30px" fontSize={isMobile ? "20px" : "30px"} fontWeight="600">Contact Us</Text>
            <FormControl mb="20px">
              <Input type="email" placeholder="Name" 
              sx={{
                fontSize: "16px",
                padding: "22px 28px",
                height: "70px",
                border: "1px solid #d5d5d5",
                _hover: {
                  borderColor: "gray.500",
                },
                _placeholder: {
                   fontWeight: "600"
                },
                _focus: {
                    border: "2px solid #d5d5d5",
                    boxShadow: "none",
                  },
              }}
              />
            </FormControl>

            <FormControl mb="20px">
              <Input type="email" placeholder="Email" 
              sx={{
                fontSize: "16px",
                padding: "22px 28px",
                height: "70px",
                border: "1px solid #d5d5d5",
                _hover: {
                  borderColor: "gray.500",
                },
                _placeholder: {
                   fontWeight: "600"
                },
                _focus: {
                    border: "2px solid #d5d5d5",
                    boxShadow: "none",
                  },
              }}
              />
            </FormControl>

            <FormControl mb="20px">
              <Textarea placeholder="Message" 
               sx={{
                   fontSize: "16px",
                   padding: "22px 28px",
                   border: "1px solid #d5d5d5",
                   _hover: {
                       borderColor: "gray.500",
                   },
                   _placeholder: {
                    fontWeight: "600"
                   },
                  _focus: {
                     border: "2px solid #d5d5d5",
                     boxShadow: "none",
                     },
                 }}
              />
            </FormControl>

            <Button type="submit" mt={4} 
             bg="#6600BA none repeat scroll 0 0"
             userSelect="none"
             fontSize="16px"
             color="white"
             display="inline-block"
             fontWeight={600}
             borderRadius={"10px"}
             p="10px 70px"
             verticalAlign="middle"
             textTransform="capitalize"
             textAlign="center"
             whiteSpace="nowrap"
             position= "relative"
             overflow="hidden"
             zIndex="1"
             _hover={{bg: "#6600BA none repeat scroll 0 0"}}
            >
            Submit
           </Button>
          </Box>
          </HStack>
         </Flex>
         </Container>
        </Flex>
      </Box>

    </Box>
    <Footer />
    </>
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
