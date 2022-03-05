interface Weather {
  description: string;
}

export interface OpenWeatherResponse {
  weather: Weather[];
  main: {
    temp: number;
  };
}

export interface WeatherResponse {
  status: "success" | "error";
  message?: string;
  weather?: {
    temp: number;
    description: string;
  };
}
