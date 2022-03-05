import type { AppProps } from "next/app";
import "@fontsource/overpass/300.css";
import "@fontsource/overpass/600.css";
import "@fontsource/overpass/700.css";
import "@fontsource/fira-code/500.css";
import "tailwindcss/tailwind.css";
import { SWRConfig } from "swr";
import axios from "axios";

function Website({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          axios.get(`/api/${url}`).then((response) => response.data),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default Website;
