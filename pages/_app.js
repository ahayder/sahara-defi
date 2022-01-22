import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import { Layout } from "../components/Layout";

const theme = extendTheme({
  colors: {
    saharaYellow: {
      900: "#FED700",
      800: "#153e75",
      700: "#2a69ac",
    },
    saharaGray: {
      900: "#E6E6E6",
      800: "#153e75",
      700: "#2a69ac",
    },
    saharaBlack: {
      900: "#333333",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  fonts: {
    heading: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
