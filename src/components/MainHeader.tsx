import { Logo } from "./Logo";
import { SocialList } from "./SocialList";
import { SpotifyCard } from "./SpotifyCard";
import Image from "next/image";

export const MainHeader = () => {
  return (
    <header className="grid grid-cols-2 grid-flow-row gap-16 bg-black text-white h-screen">
      <section className="flex flex-col pl-28 pt-30vh">
        <Logo />
        <p className="font-light text-2xl mt-9">
          Software Engineer and Backend Developer.
        </p>
        <SpotifyCard />
        <SocialList />
      </section>
      <section>
        <img className="h-screen" src="/flowers_dark.jpg" />
      </section>
    </header>
  );
};
