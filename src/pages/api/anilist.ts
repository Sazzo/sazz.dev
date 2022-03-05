import { NextApiRequest, NextApiResponse } from "next";
import { AnilistResponse } from "../../types/anilist";
import Anilist from "anilist-node";

const anilist = new Anilist();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnilistResponse>
) {
  const anilistStats = await anilist.user.stats("FelipeSazz");
  const anilistMangaLists = await anilist.lists.manga("FelipeSazz");
  const currentMangaList = anilistMangaLists.find(
    (list) => list.status === "CURRENT"
  )!;

  const animeCount = anilistStats.anime.count;
  const mangaCount = currentMangaList.entries.length;

  return res.status(200).json({
    status: "success",
    stats: {
      anime: animeCount,
      manga: mangaCount,
    },
  });
}
