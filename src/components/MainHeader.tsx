import { Logo } from "./Logo";
import { SocialList } from "./SocialList";
import { SpotifyCard } from "./SpotifyCard";
import Image from "next/image";

export const MainHeader = () => {
  return (
    <header className="flex sm:grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-row sm:gap-16 bg-black text-white h-screen">
      <section className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:pl-28 sm:pt-30vh">
        <Logo />
        <p className="font-light text-2xl text-center sm:text-left mt-9">
          Software Engineer and Backend Developer.
        </p>
        <SpotifyCard />
        <SocialList />
      </section>
      <section className="hidden sm:inline">
        <img className="h-screen" src="/flowers_dark.jpg" />
      </section>
    </header>
  );
};
