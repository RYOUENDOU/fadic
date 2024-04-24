import { Inter } from "next/font/google";
import { Box, Container } from "@mui/material";
import NextPageButtonForTutorial from "@/component/Atoms/NextPageButtonForTutorial";
import TitleText from "@/component/Atoms/TitleText";
import TutorialText from "@/component/Atoms/TutorialText";
import picture from "../public/sun-rays-on-cloudy-sky.jpeg";
import Image from "next/image";
import TutorialFooter from "@/component/Organisms/TutorialFooter";

const inter = Inter({ subsets: ["latin"] });
const titleText: string = "毎日の服選びは任せられる。";
const text: string = `様々な場にあった格好をするのに
センスも時間もいらない！
お持ちの服から最適コーディネート`;

export default function Home() {
  return (
    <>
      <Container>
        <Box
          sx={{
            marginTop: "120%",
            width: "80%",
            textAlign: "center",
            position: "fixed",
            bottom: "15%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <TitleText titleText={titleText} />
          <TutorialText text={text} />
        </Box>
          <TutorialFooter nextPagePath={"/purpose"}/>
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
}
