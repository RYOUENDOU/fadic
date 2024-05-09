import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import Image from "next/image";
import TutorialFooter from "@/component/Organisms/TutorialFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <TutorialFooter nextPagePath={"/purpose"} />
      <Image
        src={"/onbording/fadic_venefit.png"}
        layout={`fill`}
        objectFit={`cover`}
        alt={"背景画像"}
        style={{ zIndex: -1 }}
      />
    </Container>
  );
}
