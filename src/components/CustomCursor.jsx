import React, {useState, useEffect} from 'react';
import { Box } from '@chakra-ui/react';

const CustomCursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  const onMouseMove = React.useCallback(event => {
    setPosition({x: event.clientX, y: event.clientY});
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  return (
    <Box
    position="fixed"
    width="25px"
    height="25px"
    borderRadius="50%"
    backgroundColor="transparent"
    border="4px solid #F27248"
    pointerEvents="none"
    zIndex="9999"
    left={`${position.x - 30}px`}
    top={`${position.y - 30}px`}
    boxShadow="0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2) inset, 0 0 80px rgba(255, 255, 255, 0.2) inset"
    transform="translate(-50%, -50%)"
    />
  );
};

export default CustomCursor;
