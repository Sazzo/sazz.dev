import { SiGithub, SiTwitter } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export const SocialList = () => {
  return (
    <div className="flex flex-row w-36 mt-9 justify-between">
      <a href="https://twitter.com/FelipeSazz">
        <SiTwitter size={30} />
      </a>
      <a href="https://github.com/Sazzo">
        <SiGithub size={30} />
      </a>
      <a href="mailto:felipe@sazz.dev">
        <MdEmail size={30} />
      </a>
    </div>
  );
};
