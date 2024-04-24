import { Box, Container } from "@mui/material";
import TitleText from "@/component/Atoms/TitleText";
import Image from "next/image";
import { FC } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";


const usable_location: FC = () => {
  return (
    <>
      <Container>
       位置情報の利用許可確認
        <TutorialFooter nextPagePath={"about_beta_version"} />
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
export default usable_location;
