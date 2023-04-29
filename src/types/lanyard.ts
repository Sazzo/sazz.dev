export interface LanyardSpotifyData {
  song: string;
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
  artist: string;
  album_art_url: string;
  album: string;
}

export interface LanyardDiscordUserData {
  username: string;
  public_flags: number;
  id: string;
  discriminator: string;
  avatar: string;
  bot: boolean;
}

export interface LanyardData {
  spotify?: LanyardSpotifyData;
  listening_to_spotify: boolean;
  discord_user: LanyardDiscordUserData;
}

export interface LanyardPayload {
  t: "INIT_STATE" | "PRESENCE_UPDATE";
  d: LanyardData;
}
