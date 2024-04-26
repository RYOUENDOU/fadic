import { Box, Paper } from "@mui/material";
import { FC } from "react";
import ClothesCard from "../Organisms/ClothesCard";
import { HasClothesColors } from "../Types/HasClothesColors";

type Props = {
  isMaleActive: boolean;
  selectedClothesColors: HasClothesColors;
  setSelectedClothesColors: (selectedClothesColors: HasClothesColors) => void;
};

const topsColorOptions: string[] = [
  "white",
  "black",
  "red",
  "green",
  "blue",
  "yellow",
];
const pantsColorOptions: string[] = ["white", "black", "gray"];
const skirtColorOptions: string[] = [
  "white",
  "black",
  "red",
  "green",
  "blue",
  "darkcyan",
];

const SelectClothes: FC<Props> = ({
  isMaleActive,
  selectedClothesColors,
  setSelectedClothesColors,
}) => {
  return (
    <>
      {/* サーバー側の処理で、clothesTypeごとにどの服の選択肢があるかを取得する。一旦はmockで選択肢を指定 */}
      <ClothesCard
        clothesType="tops"
        clothesColorOptions={topsColorOptions}
        selectedClothesColors={selectedClothesColors}
        setSelectedClothesColors={setSelectedClothesColors}
      />
      <ClothesCard
        clothesType="pants"
        clothesColorOptions={pantsColorOptions}

        selectedClothesColors={selectedClothesColors}
        setSelectedClothesColors={setSelectedClothesColors}
      />
      {isMaleActive ? null : (
        <ClothesCard
          clothesType="skirt"
          clothesColorOptions={skirtColorOptions}

          selectedClothesColors={selectedClothesColors}
          setSelectedClothesColors={setSelectedClothesColors}
        />
      )}
    </>
  );
};

export default SelectClothes;
