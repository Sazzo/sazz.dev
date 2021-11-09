import { Spotify } from "@styled-icons/boxicons-logos";
import { SpotifyResponse } from "../types/spotify";
import useSWR from "swr";

export const SpotifyCard = () => {
  const { data }: { data?: SpotifyResponse } = useSWR("/track");
  if (!data) return null;

  const trackData = data.track;
  if (!trackData) return null;

  const artistsNames = trackData.artists.map((artist) => artist.name);
  const artists = artistsNames.join(", ");

  const trackImageUrl = data.track.images[0].url;

  return (
    <div className="flex flex-row mt-5 max-w-sm h-16 border border-gray-900 rounded-lg">
      <img
        src={trackImageUrl}
        className="ml-2 mr-3 mt-2 w-12 h-12 rounded-xl"
      />
      <div className="flex flex-col mt-2 w-72">
        <p className="text-gray-400 text-sm">{artists}</p>
        <p className="font-bold text-2xl">{trackData.name}</p>
      </div>
      <Spotify className="flex-shrink-0 mt-2" color="#1DB954" size={20} />
    </div>
  );
};
