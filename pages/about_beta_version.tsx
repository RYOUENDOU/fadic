import { Container } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";
import BackgroundPicture from "@/component/Atoms/BackgroundPicture";

const AboutBetaVersion: FC = () => {
  return (
    <Container>
      <TutorialFooter nextPagePath={"home"} isFinalPage={true} />
      <BackgroundPicture picture={"/onbording/about_beta_ver.png"} />
    </Container>
  );
};
export default AboutBetaVersion;
