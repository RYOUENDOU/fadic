// できねええええ！

import { Button } from "@mui/material";
import { FC } from "react";

type Props = {
  selectedClothes: string[];
  selectedCloth: string;
};

const WeatherButton: FC<Props> = ({ selectedClothes, selectedCloth }) => {
  const colorMap: Map<string, string> = new Map([
    ["blue", "primary"],
    ["black", "secondary"],
    ["green", "success"],
  ]);

  const getColor = (): string => {
    const color = colorMap.get(selectedCloth) || "primary"
    return color;
  };

  const handleClick = () => {
    const color = getColor(selectedClothes[selectedClothes.length - 1]);
    console.log(color);
  };

  return (
    <>
      <Button color={getColor()} onClick={handleClick}>
        hoge
      </Button>
      <p>aaa</p>
    </>
  );
};

export default WeatherButton;
