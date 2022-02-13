import { Spotify } from "@styled-icons/boxicons-logos";
import { SpotifyResponse } from "../types/spotify";
import { useLanyard } from "react-use-lanyard";
import { truncate } from "../utils/truncate";

export const SpotifyCard = () => {
  const { loading, status } = useLanyard({
    userId: "326123612153053184",
    socket: true,
  });
  if (loading || !status) return null;

  const trackData = status.spotify;
  if (!trackData) return null;

  return (
    <div className="flex flex-row mt-5 max-w-sm h-16 border border-gray-900 rounded-lg">
      <img
        src={trackData.album_art_url}
        alt={trackData.song}
        className="ml-2 mr-3 mt-2 w-12 h-12 rounded-xl"
      />
      <div className="flex flex-col mt-2 w-72">
        <p className="text-gray-400 text-sm">{trackData.artist}</p>
        <p className="font-bold text-xl">{truncate(trackData.song, 25)}</p>
      </div>
      <Spotify className="mt-2" color="#1DB954" size={20} />
    </div>
  );
};
