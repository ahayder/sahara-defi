import {
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Text,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.400")}
        px={4}
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Image width={"3rem"} src="/logo_yellow.png" alt="Sahara Token Logo" />

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button onClick={onOpen}>
              <HamburgerIcon color={useColorModeValue("gray.900", "white")} />
            </Button>

            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <HamburgerIcon color={useColorModeValue("gray.900", "white")} />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <MenuItem>$SATO Token</MenuItem>
                <MenuItem>Our Yellowpaper</MenuItem>
                <MenuItem>The Team</MenuItem>
                <MenuDivider />
                <MenuItem>Disconnect Wallet</MenuItem>
              </MenuList>
            </Menu> */}
          </Stack>
        </Flex>
      </Flex>
      <Drawer
        size={"full"}
        placement={"right"}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"gray.600"}>
          <DrawerCloseButton
            position={"absolute"}
            top={5}
            right={5}
            width={"2rem"}
            height={"2rem"}
            color={"gray.100"}
            bgColor={"gray.900"}
          />
          {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
          <DrawerBody>
            <Image
              position={"absolute"}
              top={5}
              left={5}
              width={"3rem"}
              src="/logo_yellow.png"
              alt="Sahara Token Logo"
            />
            <Flex
              color={"gray.100"}
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"100vh"}
            >
              <Text fontSize={"6xl"}>Sahara Token</Text>
              <Text fontSize={"2xl"}>Hold, and Earn BTC as Reward.</Text>
              <Text fontSize={"2xl"} mb={10}>
                Join us!
              </Text>

              <Button
                mb={4}
                color={"gray.900"}
                variant={"solid"}
                w={["90%", "80%", "50%", "30%"]}
                p={6}
                bg={"saharaYellow.900"}
              >
                $SATO Token
              </Button>
              <Button
                mb={4}
                color={"gray.900"}
                variant={"solid"}
                w={["90%", "80%", "50%", "30%"]}
                p={6}
                bg={"saharaYellow.900"}
              >
                Our Yellowpaper
              </Button>
              <Button
                mb={4}
                color={"gray.900"}
                variant={"solid"}
                w={["90%", "80%", "50%", "30%"]}
                p={6}
                bg={"saharaYellow.900"}
              >
                The Team
              </Button>
              <Button mb={4} color={"gray.100"} variant={"link"} w="30%">
                Privacy Policy
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
