import { Box, Container } from "@mui/material";
import TitleText from "@/component/Atoms/TitleText";
import Image from "next/image";
import { FC } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";



const register_clothes: FC = () => {
  return (
    <>
      <Container>
       洋服登録
        <TutorialFooter nextPagePath={"usable_location"} />
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
export default register_clothes;
