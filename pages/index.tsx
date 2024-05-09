import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import Image from "next/image";
import TutorialFooter from "@/component/Organisms/TutorialFooter";
import BackgroundPicture from "@/component/Atoms/BackgroundPicture";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <TutorialFooter nextPagePath={"/purpose"} />
      <BackgroundPicture picture={"/onbording/fadic_venefit.png"} />
    </Container>
  );
}
