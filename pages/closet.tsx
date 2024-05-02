import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import { FC, useState } from "react";
import SelectClothes from "@/component/Template/SelectClothes";
import { HasClothesColors } from "@/component/Types/HasClothesColors";
import { useRouter } from "next/router";
import CaptionTextForTutorial from "@/component/Atoms/CaptionTextForTutorial";
import Footer from "@/component/Organisms/Footer";
import TutorialFooter from "@/component/Organisms/TutorialFooter";

const textForSex: string = "持っている服の色を登録してください";
const textForSelectClothes: string =
  "選んでいる服の色からコーディネートを提案します";
const textForUpdateButton: string = "更新";

// DBから取得してくる服のカラーリスト
const registedClothesMock: HasClothesColors = {
  tops: ["black", "green", "blue"],
  pants: ["yellow", "red", "brown"],
  skirt: ["black", "white", "red"],
};

const RegisterClothes: FC = () => {
  // 本来はDBから取ってくる
  const isMaleActive: boolean = false;
  const [clothesColorOptions, setClothesColorOptions] =
    useState<HasClothesColors>();

  // DBから、ユーザーが持っている服の一覧を取得するメソッド
  const getHasClothes = (): HasClothesColors => {
    // fetchhogehoge
    return registedClothesMock;
  };
  const registedClothes: HasClothesColors = getHasClothes();

  const [selectedTopsColorList, setSelectedTopsColorList] = useState<string[]>([
    ...registedClothesMock.tops,
  ]);
  const [selectedPantsColorList, setSelectedPantsColorList] = useState<
    string[]
  >([...registedClothesMock.pants]);
  const [selectedSkirtColorList, setSelectedSkirtColorList] = useState<
    string[]
  >([...registedClothesMock.skirt]);


  // 渡された引数を元に遷移先を動的に変更

  const updateCloset = () => {
    setClothesColorOptions({
      tops: selectedTopsColorList,
      pants: selectedPantsColorList,
      skirt: selectedSkirtColorList,
    });
    console.log(`tops：${selectedTopsColorList}`);
    console.log(`bottoms：${selectedPantsColorList}`);
    console.log(`skirt：${selectedSkirtColorList}`);

  };

  // ここまで

  return (
    <>
      <Container>
        <Box marginLeft={"5%"} marginRight={"5%"}>
          <CaptionTextForTutorial text={textForSex} />

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
          <Box
          marginTop={5}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                width: "15vh",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "rgba(100, 190, 220)",
                color: "white",
                ":hover": {
                  backgroundColor: "rgba(100, 190, 220)",
                },
              }}
              onClick={() => updateCloset()}
            >
              {textForUpdateButton}
            </Button>
            {/* <TutorialFooter nextPagePath={"usable_location"}  /> */}
          </Box>
        </Box>
      </Container>
      <Footer />

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
