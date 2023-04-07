import { memo } from "react";
import { Button, Text } from "@chakra-ui/react";

const BuyButton = ({
  icon,
  name,
  isLoading,
  onCLick,
  isDisabled,
  rest,
  fontSize
}) => {

  const { root } = useStyles();

  return (
    <>
      <Button
        disabled={isDisabled}
        as={"button"}
        isLoading={isLoading}
        onClick={onCLick}
        {...root}
        {...rest}
        loadingText="loading"
        _hover={{ bg: "#488eff" }}
        fontSize={fontSize}
        fontWeight="700"
      >
        {icon}
        <Text >{name}</Text>
      </Button>
    </>
  );
};

export default memo(BuyButton);

const useStyles = () => {
  return {
    root: {
    //   bg: "black",
      py: {
        base: 5,
      },
      width: "fit-content !important",
      h: "55px",
      borderRadius: "20px",
      fontWeight: "500",
      loadingText: "Submitting",
      fontSize: ["22px"],
      lineHeight: "20px",
      letterSpacing: "0.2px",
    //   backgroundClip: "content-box, border-box"
      // borderWidth: "2px",
      // borderStyle: "solid",
    },
  };
};