import Footer from "@/component/Template/Footer";
import { Header } from "@/component/Template/Header";
import { Cloud, WbSunny, UmbrellaOutlined, AcUnit } from "@mui/icons-material";
import { Box, Button, Container } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";

const SimulationResult: FC = () => {
  const router = useRouter();
  const clothesColor = router.query.clothesColor;
  const weather = router.query.weather;
  console.log("bbb");
  console.log(clothesColor);
  console.log(weather);

  const displayWeather = (): React.ReactNode => {
    if (weather === "Sunny") {
      return <WbSunny />;
    } else if (weather === "Cloudy") {
      return <Cloud />;
    } else if (weather === "Rain") {
      return <UmbrellaOutlined />;
    } else {
      return <AcUnit />;
    }
  };

  // const clothesColor: string[] = data.clothesColor;
  return (
    <Container>
      <Header />
      <Box sx={{ marginTop: "10px" }} />
      <p>本文だよ</p>
      {displayWeather()}
      <Footer />
    </Container>
  );
};

export default SimulationResult;
