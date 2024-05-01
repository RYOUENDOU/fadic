import { FC } from "react";
import ColorIcon from "../Atoms/ColorIcon";
import { Box } from "@mui/material";
import { ClothesColorOption } from "../Types/ClothesColorOptions";
import { HasClothesColors } from "../Types/HasClothesColors";

type Props = {
  clothesType: string;
  selectedClothesColorList: string[];
  setSelectedClothesColorList: (selectedTopsColorList: string[]) => void;
};

// 色の選択肢リスト。実際にはclothesTypeごとにDBから取ってくるが一旦mock
const topsColorList: string[] = [
  "white",
  "black",
  "red",
  "green",
  "blue",
  "yellow",
];
const topsColorOptions: ClothesColorOption[] = topsColorList.map((color) => {
  return { color: color, isChecked: false };
});
const pantsColorList: string[] = ["white", "black", "gray"];
const pantsColorOptions: ClothesColorOption[] = pantsColorList.map((color) => {
  return { color: color, isChecked: false };
});
const skirtColorList: string[] = [
  "white",
  "black",
  "red",
  "green",
  "blue",
  "darkcyan",
];
const skirtColorOptions: ClothesColorOption[] = skirtColorList.map((color) => {
  return { color: color, isChecked: false };
});



const ColorIcons: FC<Props> = ({
  clothesType,
  selectedClothesColorList,
  setSelectedClothesColorList
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {skirtColorList.map((color, index) => (
          <Box key={index} sx={{ width: "25%" }}>
            <ColorIcon color={color} selectedClothesColorList={selectedClothesColorList} setSelectedClothesColorList={setSelectedClothesColorList} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ColorIcons;
