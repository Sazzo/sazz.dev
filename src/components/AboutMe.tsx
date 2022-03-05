import FadeIn from "react-fade-in";
import { UselessStats } from "./UselessStats";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col text-lg text-white text-left pl-28 mb-8"
    >
      <h1 className="font-bold text-3xl mb-4">Hi, I&apos;m sazz.</h1>
      <p className="mb-4">
        A software engineer, backend developer and weeb from Brazil.
      </p>
      <p className="mb-4">
        I like backend development, and consider myself pretty much proficient
        in <span className="font-semibold">TS/JS</span>, specially on
        server-side.
      </p>

      <h3 className="font-bold text-xl mb-4">Outside of programming</h3>
      <p className="mb-4">
        I love to manage and moderate communities, in my free time, you can
        probably find me reading some manga or watching some anime.
      </p>

      <h3 className="font-bold text-xl mb-4">Fun Facts</h3>
      <UselessStats />
    </section>
  );
};
