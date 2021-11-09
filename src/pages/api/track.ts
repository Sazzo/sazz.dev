import type { NextApiRequest, NextApiResponse } from "next";
import { SpotifyCurrentTrackResponse } from "../../types/spotify";
import getSpotifyToken from "../../utils/getSpotifyToken";
import axios from "axios";

interface ResponseData {
  status: string;
  message?: string;
  track?: any; // sorry mom
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const accessToken = await getSpotifyToken();

    const currentPlayingTrack = await axios.get<SpotifyCurrentTrackResponse>(
      "https://api.spotify.com/v1/me/player/currently-playing?market=ES",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!currentPlayingTrack.data.item)
      return res.status(200).json({
        status: "ok",
        track: null,
      });

    return res.status(200).json({
      status: "ok",
      track: {
        name: currentPlayingTrack.data.item.name,
        artists: currentPlayingTrack.data.item.artists,
        images: currentPlayingTrack.data.item.album.images,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
