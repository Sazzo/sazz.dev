import FadeIn from "react-fade-in";
import { SectionLayout } from "../layouts/SectionLayout";
import { UselessStats } from "./UselessStats";

export const AboutMe = () => {
  return (
    <SectionLayout id="about" title="Hi, I'm sazz.">
      <p>A software and backend developer from Brazil.</p>
      <p>
        I like backend development, and consider myself pretty much proficient
        in <span className="font-semibold">TS/JS</span>, specially on
        server-side.
      </p>

      <h3 className="font-bold text-xl mb-4">Outside of programming</h3>
      <p>
        I love to manage and moderate communities, in my free time, you can
        probably find me reading some manga or watching some anime.
      </p>

      <h3 className="font-bold text-xl mb-4">Fun Facts</h3>
      <UselessStats />
    </SectionLayout>
  );
};
