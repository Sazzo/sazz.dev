import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/overpass/300.css";

import "../styles/main.css";
import type { AppProps } from "next/app";

const theme = extendTheme({
  fonts: {
    heading: "Overpass",
    body: "Overpass",
  },
});

function SazzWebsite({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default SazzWebsite;
