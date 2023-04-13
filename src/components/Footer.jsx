import {
  ButtonGroup,
  IconButton,
  Stack,
  Text,
  Flex,
  Image,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react'
import Container from './Container';
import messageIcon from '../assets/message 1.svg';
import discordIcon from '../assets/discord (2) 1.svg';
import twitterIcon from '../assets/twitter (2) 1.svg';

const Footer = () => {

  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  return (
  <Container as="footer" role="contentinfo"
  bg="#F0EBFF"
  borderTop="1px solid #6600BA"
  >
    <Stack
      spacing="8"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      py={{ base: '8', md: '12' }}
    >
      <Stack spacing={{ base: '6', md: '8' }} align="start">
        {/* <Image src={prideLogo} alt="" /> */}
        <Heading>Enos Coin</Heading>
        <Text fontSize={isMobile ? "14px" : "16px"} color="#313033" fontWeight="500">
        &copy; {new Date().getFullYear()} Enos Coin, Inc. All rights reserved.
      </Text>
      </Stack>
       {/* MIDDLE COLUMN */}
       <Flex w={"55%"} px={"10%"} flexDir={"row"} justify={"space-between"} spacing={{ base: '6', md: '8' }}>
         {/* <Text color="#313033" fontSize="22px" fontWeight="500" cursor="pointer">UniSwap</Text> 
         <Text color="#313033" fontSize="22px" fontWeight="500" cursor="pointer">Governance</Text> 
         <Text color="#313033" fontSize="22px" fontWeight="500" cursor="pointer">Community</Text> 
         <Text color="#313033" fontSize="22px" fontWeight="500" cursor="pointer">Help</Text>  */}
        </Flex>

        <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          size="md"
          icon={<Image src={messageIcon} alt="" />}
          sx={{
            borderRadius: "full",
            backgroundColor: "gray.200",
            color: "gray.700",
            _hover: {
              backgroundColor: "gray.300",
            },
            _active: {
              backgroundColor: "gray.400",
            },
          }}
        />
        <IconButton as="a" href="#" aria-label="GitHub" 
        icon={<Image src={discordIcon} alt="" width={26} />} 
        size="md"
        sx={{
          borderRadius: "full",
          backgroundColor: "gray.200",
          color: "gray.700",
          _hover: {
            backgroundColor: "gray.300",
          },
          _active: {
            backgroundColor: "gray.400",
          },
        }}
        />
        <IconButton as="a" href="#" aria-label="Twitter" width="20px" 
        icon={<Image src={twitterIcon} alt="" />} 
        size="md"
        sx={{
          borderRadius: "full",
          backgroundColor: "gray.200",
          color: "gray.700",
          _hover: {
            backgroundColor: "gray.300",
          },
          _active: {
            backgroundColor: "gray.400",
          },
          fontSize: "20px",
        }}
        />
      </ButtonGroup>

    </Stack>
    {/* <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
    >
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
      </ButtonGroup>
    </Stack> */}
  </Container>
  )
}

export default Footer;
