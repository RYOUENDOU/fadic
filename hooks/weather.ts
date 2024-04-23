import { Position } from "@/component/Types/Position";

async function getWeatherInfo(location: Position): Promise<string> {
  const latitude: number = location.coords.latitude;
  const longitude: number = location.coords.longitude;
  console.log('fetchの直前')

  const response = await fetch("./weatherInfo.json");
  const responseJson = await response.json();

  return responseJson.weather[0].main;
}

export async function getWeather(location: Position): Promise<string> {
  const weather: string = await getWeatherInfo(location);
  return weather;
}