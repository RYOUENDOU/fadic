import { Box, Container, Paper } from "@mui/material";
import TitleText from "@/component/Atoms/TitleText";
import Image from "next/image";
import { FC, useState } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";
import CaptionTextForTutorial from "@/component/Atoms/CaptionTextForTutorial";
import SelectSex from "@/component/Molecules/SelectSexButtons";
import SelectClothes from "@/component/Template/SelectClothes";

const titleText: string = `コーディネートに使用する
持っている服の色を登録`;

const textForSex: string = "性別を選んでください";
const textForSelectClothes: string = "持っている服の色を全て選んでください";

type HasClothesColors = {
  tops: string[];
  pants: string[];
  skirt: string[];
}

const RegisterClothes: FC = () => {

  const [isMaleActive, setIsMaleActive] = useState<boolean>(true);
  const [selectedClothesColors, setSelectedClothesColors] = useState<HasClothesColors>({tops: [], pants: [], skirt: []});

  return (
    <>
      <Container>
        <Box marginLeft={"5%"} marginRight={"5%"}>
        <Box sx={{ textAlign: "center", marginTop: "15%" }}>
          <TitleText titleText={titleText} />
        </Box>
        <CaptionTextForTutorial text={textForSex} />
        <Box>
        <SelectSex isMaleActive={isMaleActive} setIsMaleActive={setIsMaleActive}/>
        </Box>
        <CaptionTextForTutorial text={textForSelectClothes} />
        <SelectClothes isMaleActive={isMaleActive}selectedClothesColors={selectedClothesColors} setSelectedClothesColors={setSelectedClothesColors}/>
        <TutorialFooter nextPagePath={"usable_location"} />
        </Box>
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
};
export default RegisterClothes;
