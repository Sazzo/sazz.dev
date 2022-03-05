export interface AnilistResponse {
  status: "success" | "error";
  stats: {
    anime: number;
    manga: number;
  };
}
