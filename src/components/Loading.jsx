import React from 'react'
import {Box, Flex} from '@chakra-ui/react'
import Lottie from 'lottie-react'
import loadingAnimation from '../assets/Lottie/97746-loading-deuna.json'

const style = {
    height: 300,
  };

const Loading = () => {
  return (
    <Box w="100%">
      <Flex bgColor="white" justifyContent="center" alignItems="center"
      pt="100px" px={{ base: "0%", md: "5%" }} py="7%"
      >
      <Lottie
         animationData={loadingAnimation}
          style={style}
         />
      </Flex>
    </Box>
  )
}

export default Loading
