export interface SpotifyArtist {
  name: string;
}

export interface SpotifyAlbumImage {
  url: string;
}

export interface SpotifyCurrentTrackResponse {
  item: {
    name: string;
    artists: SpotifyArtist[];
    album: {
      images: SpotifyAlbumImage[];
    };
  };
}

export interface SpotifyTokenResponse {
  access_token: string;
}

export interface SpotifyResponse {
  status: "ok" | "error";
  track: {
    name: string;
    artists: SpotifyArtist[];
    images: SpotifyAlbumImage[];
  };
}
