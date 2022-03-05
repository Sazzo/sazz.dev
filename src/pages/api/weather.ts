import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { OpenWeatherResponse, WeatherResponse } from "../../types/weather";

const { OPEN_WEATHER_API_KEY } = process.env;

const SALVADOR_LAT = -12.9711;
const SALVADOR_LON = -38.5108;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherResponse>
) {
  try {
    const openWeatherResponse = await axios.get<OpenWeatherResponse>(
      `http://api.openweathermap.org/data/2.5/weather?lat=${SALVADOR_LAT}&lon=${SALVADOR_LON}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    const roundedTemp = Math.round(openWeatherResponse.data.main.temp);
    const weatherDescription = openWeatherResponse.data.weather[0].description;

    return res.status(200).json({
      status: "success",
      weather: {
        temp: roundedTemp,
        description: weatherDescription,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
