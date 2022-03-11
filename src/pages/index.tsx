import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import FadeIn from "react-fade-in";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { MainHeader } from "../components/MainHeader";

const Home: NextPage = () => {
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
              url: "https://sazz.space/avatar.jpg",
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
        <link rel="icon" type="image/jpeg" href="/avatar.jpg" />
      </Head>

      <FadeIn>
        <MainHeader />
        <AboutMe />
        <Contact />
      </FadeIn>
    </div>
  );
};

export default Home;
