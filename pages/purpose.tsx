import { Container } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";

const purpose: FC = () => {
  return (
    <Container>
      <TutorialFooter nextPagePath={"register_clothes"} />
      <Image
        src={"/onbording/purpose.png"}
        layout={`fill`}
        objectFit={`cover`}
        alt={"背景画像"}
        style={{ zIndex: -1 }}
      />
    </Container>
  );
};
export default purpose;
