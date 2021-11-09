import { Github, Twitter } from "@styled-icons/boxicons-logos";
import { Email } from "@styled-icons/material";

export const SocialList = () => {
  return (
    <div className="flex flex-row w-36 mt-9 justify-between">
      <a href="https://twitter.com/FelipeSazz">
        <Twitter size={35} />
      </a>
      <a href="https://github.com/Sazzo">
        <Github size={35} />
      </a>
      <a href="hello@sazz.space">
        <Email size={35} />
      </a>
    </div>
  );
};
