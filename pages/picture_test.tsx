import { Box, Container } from "@mui/material";
import TitleText from "@/component/Atoms/TitleText";
import Image from "next/image";
import { FC } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";

const register_clothes: FC = () => {
  return (
    <>
      <Container>
        ベータ版について
        <TutorialFooter nextPagePath={"home"} />
      <Box sx={{height: '300px', width: '300px'}}>
      <Image
        src={"/image2.png"}
        layout="fill"
    objectFit="contain"
        
        alt={"背景画像"}
      />
      </Box>
      </Container>
    </>
  );
};
export default register_clothes;
