import { Box, Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { getCurrentLocation } from "@/hooks/location";
import { getWeather } from "@/hooks/weather";

import { Position } from "../Types/Position";

type Props = {
  location: Position;
  setLocation: (location: Position) => void;
  weather: string;
  setWeather: (weather: string) => void;
};

let position: Position = {
  coords: {
    latitude: 0,
    longitude: 0,
    altitude: null,
    accuracy: 0,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  },
  timestamp: 0,
};

// 引数は、オブジェクトでくくる
const LocationArea: FC<Props> = ({
  location,
  setLocation,
  weather,
  setWeather,
}) => {
  const [displayWeatherAndLocation, setDisplayWeatherAndLocation] =
    useState<boolean>(false);

  useEffect(() => {
    const locationSet = async () => {
      try {
        const position = await getCurrentLocation();
        setLocation(position);
      } catch (error) {}
    };
    const weatherSet = async () => {
      try {
        const weather = await getWeather(position);
        setWeather(weather);
      } catch (error) {}
    };
    locationSet();
    weatherSet();
  }, []);

  const changeDisplayWeatherAndLocation = (): void => {
    setDisplayWeatherAndLocation(!displayWeatherAndLocation);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => changeDisplayWeatherAndLocation()}
      >
        経度緯度を表示する
      </Button>
      {displayWeatherAndLocation && location ? (
        <Box>
          <p>{`緯度：${location.coords.latitude}`}</p>
          <p>{`経度：${location.coords.longitude}`}</p>
        </Box>
      ) : (
        <Box />
      )}
    </>
  );
};

export default LocationArea;
