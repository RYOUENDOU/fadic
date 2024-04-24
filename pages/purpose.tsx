import { Box, Container } from "@mui/material";
import TitleText from "@/component/Atoms/TitleText";
import Image from "next/image";
import { FC } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";

const titleText: string = `気候と目的・シーンから
場にあったコーディネートを提案`;

const purpose: FC = () => {
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center", marginTop: "15%" }}>
          <TitleText titleText={titleText} />
        </Box>
        <TutorialFooter nextPagePath={"register_clothes"} />
      </Container>
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
export default purpose;
