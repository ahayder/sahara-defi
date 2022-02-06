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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Text,
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
      {/* <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay />
          <ModalCloseButton />
          <Flex>
            <Heading>Sahara Token</Heading>
            <Text>Hold, and earn BTC as reward.</Text>
            <Text>Join us!</Text>
          </Flex>
      </Modal> */}
    </>
  );
}
