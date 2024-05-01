import { Circle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FC } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ClothesColorOption } from "../Types/ClothesColorOptions";
import { HasClothesColors } from "../Types/HasClothesColors";

type Props = {
  color: string;
  selectedClothesColorList: string[];
  setSelectedClothesColorList: (selectedClothesColorList: string[]) => void;
};

const ColorIcons: FC<Props> = ({
  color,
  selectedClothesColorList,
  setSelectedClothesColorList,
}) => {

  const isChecked = ():boolean => {
    return selectedClothesColorList ? selectedClothesColorList.includes(color) : false;
  }

  const clickColor = () => {

    const colorExists:boolean = selectedClothesColorList ? selectedClothesColorList.includes(color) : false;
    const newColors = colorExists
      ? selectedClothesColorList.filter((clothesColor) => clothesColor !== color)
      : [...selectedClothesColorList || [], color];
      setSelectedClothesColorList(newColors);
      console.log(newColors)

  };
  if (isChecked()) {
    return (
      <CheckCircleIcon
        fontSize="large"
        sx={{ color: color }}
        onClick={() => clickColor()}
      />
    );
  }
  return <Circle fontSize="large" sx={{ color: color }} onClick={() => clickColor()}/>;
};

export default ColorIcons;
