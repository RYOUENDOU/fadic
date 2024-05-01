import { Box, Container } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";

const usable_location: FC = () => {
  return (
    <Container>
      <TutorialFooter nextPagePath={"about_beta_version"} />
      <Image
        src={"/onbording/confirmation_location.png"}
        layout={`fill`}
        objectFit={`cover`}
        alt={"背景画像"}
        style={{ zIndex: -1 }}
      />
    </Container>
  );
};
export default usable_location;
