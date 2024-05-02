import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import { FC, useState } from "react";
import SelectSex from "@/component/Molecules/SelectSexButtons";
import SelectClothes from "@/component/Template/SelectClothes";
import { HasClothesColors } from "@/component/Types/HasClothesColors";
import { useRouter } from "next/router";
import CaptionTextForTutorial from "@/component/Atoms/CaptionTextForTutorial";

const textForSex: string = "性別を選んでください";
const textForSelectClothes: string = "持っている服の色を全て選んでください";

const RegisterClothes: FC = () => {
  const [isMaleActive, setIsMaleActive] = useState<boolean>(true);
  const [clothesColorOptions, setClothesColorOptions] =
    useState<HasClothesColors>();

  const [selectedTopsColorList, setSelectedTopsColorList] = useState<string[]>(
    []
  );
  const [selectedPantsColorList, setSelectedPantsColorList] = useState<
    string[]
  >([]);
  const [selectedSkirtColorList, setSelectedSkirtColorList] = useState<
    string[]
  >([]);

  // ここはfooter切り出しただけ。本当は残したくない
  const router = useRouter();

  // 渡された引数を元に遷移先を動的に変更

  const moveNextPage = () => {
    setClothesColorOptions({
      tops: selectedTopsColorList,
      pants: selectedPantsColorList,
      skirt: selectedSkirtColorList,
    });
    console.log(`tops：${selectedTopsColorList}`);
    console.log(`bottoms：${selectedPantsColorList}`);
    console.log(`skirt：${selectedSkirtColorList}`);

    router.push("usable_location");
  };

  // ここまで

  return (
    <>
      <Container>
        <Box margin={"50% 5% 0% 5%"} >
          <CaptionTextForTutorial text={textForSex} />
          <Box>
            <SelectSex
              isMaleActive={isMaleActive}
              setIsMaleActive={setIsMaleActive}
              setSelectedTopsColorList={setSelectedTopsColorList}
              setSelectedPantsColorList={setSelectedPantsColorList}
              setSelectedSkirtColorList={setSelectedSkirtColorList}
            />
          </Box>
          <CaptionTextForTutorial text={textForSelectClothes} />
          <SelectClothes
            isMaleActive={isMaleActive}
            selectedTopsColorList={selectedTopsColorList}
            setSelectedTopsColorList={setSelectedTopsColorList}
            selectedPantsColorList={selectedPantsColorList}
            setSelectedPantsColorList={setSelectedPantsColorList}
            selectedSkirtColorList={selectedSkirtColorList}
            setSelectedSkirtColorList={setSelectedSkirtColorList}
          />
          {/* <TutorialFooter nextPagePath={"usable_location"} /> */}
          <Box
            sx={{
              marginTop: "8%",
              width: "80%",
              textAlign: "center",
              position: "fixed",
              bottom: "5%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button
              sx={{
                width: "20vh",
                backgroundColor: "#333333",
                color: "white",
                ":hover": {
                  backgroundColor: "#666666",
                },
              }}
              onClick={() => moveNextPage()}
            >
              次へ
            </Button>
          </Box>
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
