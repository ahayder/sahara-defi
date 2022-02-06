import {
  Flex,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ClaimBtcTab from "./Tabs/ClaimBtcTab";
import LiquidityTab from "./Tabs/LiquidityTab";
import SwapTab from "./Tabs/SwapTab";

const MainCointainer = () => {
  return (
    <Flex
      direction={"column"}
      px={4}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={["100%", "80%", "55%", "50%", "40%"]}
    >
      <Tabs variant="unstyled" width={"100%"} align="center" size="lg">
        <TabList
          bg={useColorModeValue("gray.100", "gray.400")}
          borderRadius={"md"}
        >
          <Tab
            borderRadius={"md"}
            _selected={{ color: "gray.900", bg: "saharaYellow.900" }}
            width={"100%"}
            fontWeight={"bold"}
          >
            Swap
          </Tab>
          <Tab
            borderRadius={"md"}
            _selected={{ color: "gray.900", bg: "saharaYellow.900" }}
            width={"100%"}
            fontWeight={"bold"}
          >
            Liquidity
          </Tab>
          <Tab
            borderRadius={"md"}
            _selected={{ color: "gray.900", bg: "saharaYellow.900" }}
            width={"100%"}
            fontWeight={"bold"}
          >
            Claim Btc
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={"0"}>
            <SwapTab />
          </TabPanel>
          <TabPanel px={"0"}>
            <LiquidityTab />
          </TabPanel>
          <TabPanel px={"0"}>
            <ClaimBtcTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default MainCointainer;
