import { Box, Container } from "@mui/material";
import Image from "next/image";
import { FC, useState } from "react";
import Footer from "@/component/Organisms/Footer";
import DisplayWeather from "@/component/Template/DisplayWeather";
import PurposeOption from "@/component/Organisms/PurposeOption";
import RecommendFassion from "@/component/Template/RecommendFassion";

const Home: FC = () => {
const [selectDate, setSelectDate] = useState<number>(0);

  return (
    <>
      <Container>
        <DisplayWeather selectDate={selectDate} setSelectDate={setSelectDate}/>
        <Box sx={{ marginTop: "4%" }}>
          <PurposeOption />
          <RecommendFassion />
        </Box>
      </Container>
      <Footer />
      <Image
        src={"/sun-rays-on-cloudy-sky.jpeg"}
        layout={`fill`}
        objectFit={`cover`}
        alt={"背景画像"}
        style={{ zIndex: -1 }}
      />
    </>
  );
};
export default Home;
