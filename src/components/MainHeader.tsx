import { Logo } from "./Logo";
import { SocialList } from "./SocialList";
import { SpotifyCard } from "./SpotifyCard";
import Image from "next/image";

export const MainHeader = () => {
  return (
    <header className="flex lg:grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row lg:gap-16 lg:bg-none text-white h-screen ">
      <div className="w-screen h-screen absolute bg-flower-dark bg-center bg-cover blur-md lg:hidden" />
      <section className="flex w-screen flex-col justify-center items-center lg:justify-start z-10 lg:items-start lg:pl-28 lg:pt-30vh">
        <Logo />
        <p className="font-light text-2xl text-center lg:text-left mt-9">
          Software Engineer and Backend Developer.
        </p>
        <SpotifyCard />
        <SocialList />
      </section>
      <section className="hidden lg:inline">
        <img className="h-screen" src="/flowers_dark.jpg" />
      </section>
    </header>
  );
};
