import { Logo } from "./Logo";
import { SocialList } from "./SocialList";
import { SpotifyCard } from "./SpotifyCard";
import Image from "next/image";
import { UselessStats } from "./UselessStats";
import FadeIn from "react-fade-in";

export const MainHeader = () => {
  return (
    <header className="flex lg:grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row lg:gap-60 lg:bg-none text-white h-screen">
      <section className="flex w-screen flex-col justify-center items-center lg:w-max lg:justify-start lg:items-start lg:pl-28 lg:pt-30vh">
        <Logo />
        <p className="font-light text-2xl text-center lg:text-left mt-9">
          Software Engineer and Backend Developer.
        </p>
        <SpotifyCard />
        <SocialList />
      </section>
      <section className="hidden lg:inline">
        <img alt="White Cat" className="h-5/6" src="/whitecat.jpg" />
      </section>
    </header>
  );
};
