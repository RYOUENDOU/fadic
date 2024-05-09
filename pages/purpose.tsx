import { Container } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";
import BackgroundPicture from "@/component/Atoms/BackgroundPicture";

const purpose: FC = () => {
  return (
    <Container>
      <TutorialFooter nextPagePath={"register_clothes"} />
      <BackgroundPicture picture={"/onbording/purpose.png"} />
    </Container>
  );
};
export default purpose;
