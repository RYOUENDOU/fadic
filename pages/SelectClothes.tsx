// import WeatherButton from "@/component/Atoms/WeatherButton";
import ClothesArea from "@/component/Template/ClothesArea";
import Footer from "@/component/Template/Footer";
import { Header } from "@/component/Template/Header";
import LocationArea from "@/component/Template/LocationArea";
import { Position } from "@/component/Types/Position";
import { Weather_Clothes } from "@/component/Types/Weather_Clothes";
import { getCurrentLocation } from "@/hooks/location";
import { Box, Button, Container } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const SelectClothes: FC = () => {
  const router = useRouter();

  const startSimulation = () => {
    console.log(clothesColor);
    router.push({
      pathname: "/SimulationResult",
      query: {
        clothesColor: clothesColor,
        weather: weather,
      },
    });
  };

  const [clothesColor, setClothesColor] = useState<string[]>([]);
  const [location, setLocation] = useState<Position>({
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
  });

  const [weather, setWeather] = useState<string>("");
  return (
    <Container>
      <Header />
      <Box sx={{ marginTop: "10px" }} />
      <ClothesArea
        clothesColor={clothesColor}
        setClothesColor={setClothesColor}
      />
      <LocationArea
        location={location}
        setLocation={setLocation}
        weather={weather}
        setWeather={setWeather}
      />
      <Box>
        <Button onClick={startSimulation}>シミュレーション実施</Button>
      </Box>
      <Footer />
    </Container>
  );
};

export default SelectClothes;
