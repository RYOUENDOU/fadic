import { Box, Container } from "@mui/material";
import TitleText from "@/component/Atoms/TitleText";
import Image from "next/image";
import { FC } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";

const AboutBetaVersion: FC = () => {
  return (
    <>
      <Container>
        <TutorialFooter nextPagePath={"home"} isFinalPage={true}/>
      </Container>
      <Image
        src={"/onbording/about_beta_ver.png"}
        layout={`fill`}
        objectFit={`cover`}
        alt={"背景画像"}
        style={{ zIndex: -1 }}
      />
    </>
  );
};
export default AboutBetaVersion;