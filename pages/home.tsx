import { Box, Container } from "@mui/material";
import Image from "next/image";
import { FC, useState } from "react";
import Footer from "@/component/Organisms/Footer";
import DisplayWeather from "@/component/Template/DisplayWeather";
import PurposeOption from "@/component/Organisms/PurposeOption";
import RecommendFassion from "@/component/Template/RecommendFassion";
import MenuArea from "@/component/Template/MenuArea";
import BackgroundPicture from "@/component/Atoms/BackgroundPicture";

const Home: FC = () => {
const [selectDate, setSelectDate] = useState<number>(0);

  return (
    <>
    <MenuArea />
      <Container>
        <DisplayWeather selectDate={selectDate} setSelectDate={setSelectDate}/>
        <Box sx={{ marginTop: "4%" }}>
          <PurposeOption />
          <RecommendFassion />
        </Box>
      </Container>
      <Footer />
      <BackgroundPicture picture={"/sun-rays-on-cloudy-sky.jpeg"} />
    </>
  );
};
export default Home;
