import { SiAnilist } from "react-icons/si";
import { BsCloudSunFill } from "react-icons/bs";

export const UselessStats = () => {
  return (
    <div className="flex flex-col text-">
      <p>
        <BsCloudSunFill className="mr-2 inline-block align-middle" size={23} />{" "}
        I live in Salvador, Bahia and it&apos;s currently{" "}
        <span className="font-bold">29°C</span>{" "}
        <span className="text-sm">(cloudy)</span> here.
      </p>
      <p>
        <SiAnilist className="mr-2 inline-block align-middle" size={23} /> I’ve
        completed <span className="font-bold">171 animes</span>, and I’m reading{" "}
        <span className="font-bold">21 manga</span>.
      </p>
    </div>
  );
};
