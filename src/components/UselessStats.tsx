import { SiAnilist } from "react-icons/si";
import { BsCloudSunFill } from "react-icons/bs";
import { WeatherResponse } from "../types/weather";
import useSWR from "swr";
import { AnilistResponse } from "../types/anilist";

export const UselessStats = () => {
  const weatherResponse = useSWR<WeatherResponse>("weather");
  const anilistResponse = useSWR<AnilistResponse>("anilist");

  if (!weatherResponse.data || !anilistResponse.data) return null;

  const temperature = weatherResponse.data.weather?.temp;
  const description = weatherResponse.data.weather?.description;

  const animeCount = anilistResponse.data.stats.anime;
  const mangaCount = anilistResponse.data.stats.manga;

  return (
    <div className="flex flex-col ">
      <p>
        <BsCloudSunFill className="mr-2 inline-block align-middle" size={23} />{" "}
        I live in Salvador, Bahia and it&apos;s currently{" "}
        <span className="font-bold">{temperature}°C</span>{" "}
        <span className="text-sm">({description})</span> here.
      </p>
      <p>
        <SiAnilist className="mr-2 inline-block align-middle" size={23} /> I’ve
        completed <span className="font-bold">{animeCount} animes</span>, and
        I’m reading <span className="font-bold">{mangaCount} manga</span>.
      </p>
    </div>
  );
};
