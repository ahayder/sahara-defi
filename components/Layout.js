import { Flex } from "@chakra-ui/react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <Flex
      height="100vh"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Head>Sahara Token DApp</Head>
      <NavBar />
      {children}
      <Footer />
    </Flex>
  );
};
