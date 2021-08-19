import Head from "next/head";
import Header from "../components/home/Header";
import { NextSeo } from "next-seo";
export default function Home() {
  return (
    <div>
      <NextSeo
        title="FelipeSazz"
        description="Software Engineer and Backend Developer."
        additionalMetaTags={[
          {
            name: "theme-color",
            content: "#306FBD",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "en_US",
          images: [
            {
              url: "https://sazz.space/avatar.png",
              width: 460,
              height: 460,
              alt: "Avatar",
            },
          ],
        }}
        twitter={{
          cardType: "summary",
          handle: "FelipeSazz",
          site: "sazz.space",
        }}
      />
      <Head>
        <title>FelipeSazz</title>
        <link rel="icon" type="image/png" href="/avatar.png" />
      </Head>

      <Header />
    </div>
  );
}
