import {
  Flex,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";

const LiquidityTab = () => {
  return (
    <Flex direction={"column"}>
      <Flex
        bg={"saharaYellow.900"}
        p="5"
        direction={"column"}
        borderRadius={"md"}
      >
        <Button size={"lg"} variant={"solid"} bgColor={"gray.900"}>
          Add Liquidity
        </Button>
        <Text
          my={"0.5rem"}
          color={"gray.900"}
          fontWeight={"bold"}
          alignSelf={"flex-start"}
        >
          Your Liquidity
        </Text>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          height={"10rem"}
          bgColor={"#00000040"}
          borderRadius={"lg"}
        >
          <Text fontWeight={"bold"} color={"gray.900"}>
            Connect to a wallet to view your liquidity
          </Text>
        </Flex>

        <Divider
          height={"1.5px"}
          alignSelf={"center"}
          width={"70%"}
          my={"1.5rem"}
          bgColor={"gray.900"}
        />

        <Text alignSelf={"flex-start"} fontWeight={"bold"} color={"gray.900"}>
          Don't see a pool you joined? Import it.
        </Text>
      </Flex>
    </Flex>
  );
};

export default LiquidityTab;
