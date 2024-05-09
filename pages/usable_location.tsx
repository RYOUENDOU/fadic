import { Container } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";
import BackgroundPicture from "@/component/Atoms/BackgroundPicture";

const UsableLocation: FC = () => {
  return (
    <Container>
      <TutorialFooter nextPagePath={"about_beta_version"} />
      <BackgroundPicture picture={"/onbording/confirmation_location.png"} />
    </Container>
  );
};
export default UsableLocation;
