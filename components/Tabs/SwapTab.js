import {
  Flex,
  Box,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
  Image,
  Spacer,
  Center,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  ButtonGroup,
} from "@chakra-ui/react";

const SwapTab = () => {
  return (
    <Flex direction={"column"}>
      <Flex
        bg={"saharaYellow.900"}
        p="5"
        direction={"column"}
        borderRadius={"md"}
      >
        <Flex alignItems={"center"}>
          <Flex direction={"column"} alignItems={"start"} color="gray.900">
            <Text fontSize="2xl" fontWeight="bold">
              0.00
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              Balance: 0.00
            </Text>
          </Flex>
          <Spacer />
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"6rem"}
            bg="gray.900"
            borderRadius={"md"}
            pr="5px"
            h={"2.5rem"}
          >
            <Image src="/bnb-logo.png" alt="Binance" w="2rem" h="2rem" />
            <Text fontSize="lg" fontWeight="bold" color="gray.100">
              BNB
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"center"} my="1.5rem">
          <Image w={"1.5rem"} src="/exchange-alt-solid.svg" alt="Alter Icon" />
        </Flex>

        <Flex alignItems={"center"}>
          <Flex direction={"column"} alignItems={"start"} color="gray.900">
            <Text fontSize="2xl" fontWeight="bold">
              0.00
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              Balance: 0.00
            </Text>
          </Flex>
          <Spacer />
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"6rem"}
            bg="gray.900"
            borderRadius={"md"}
            pr="5px"
            h={"2.5rem"}
          >
            <Image src="/logo_yellow.png" alt="Sato Logo" w="2rem" h="2rem" />
            <Text pl={"3px"} fontSize="lg" fontWeight="bold" color="gray.100">
              SATO
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex alignItems={"center"} justifyContent={"center"}>
        <Text mr="25px" fontWeight={"bold"}>
          Slippage?
        </Text>
        <Slider aria-label="slider-ex-4" defaultValue={1} my={"1rem"}>
          <SliderTrack bg="gray.300">
            <SliderFilledTrack bg="gray.900" />
          </SliderTrack>
          <SliderThumb boxSize={10} bg={"saharaYellow.900"}>
            <Text fontSize={"sm"} fontWeight={"bold"} color={"gray.900"}>
              1%
            </Text>
          </SliderThumb>
        </Slider>
      </Flex>

      <Button
        size={"lg"}
        bg={useColorModeValue("gray.900", "gray.400")}
        color={useColorModeValue("white", "gray.900")}
      >
        Unlock Wallet
      </Button>

      <ButtonGroup
        variant="solid"
        my="1rem"
        size={"lg"}
        color={useColorModeValue("white", "gray.900")}
      >
        <Button w="100%" bg={useColorModeValue("gray.900", "gray.400")}>Refer & Earn</Button>
        <Spacer />
        <Button w="100%" bg={useColorModeValue("gray.900", "gray.400")}>Chart</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default SwapTab;
