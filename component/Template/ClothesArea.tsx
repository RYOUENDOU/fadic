import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";

type Props = {
  clothesColor: string[];
  setClothesColor: (clothesColor: string[]) => void;
};

const ClothesArea: FC<Props> = ({ clothesColor, setClothesColor }) => {
  // クリックしたらリストに追加されたり、リストにあったらremoveされたりする処理。
  const clickClothe = (selectedColor: string) => {
    const colorExists = clothesColor.includes(selectedColor);
    const newColors = colorExists
      ? clothesColor.filter((color) => color !== selectedColor)
      : [...clothesColor, selectedColor];

    setClothesColor(newColors);
  };
  const selectedColorMessage = (): React.ReactNode => {
    return clothesColor.length === 0
      ? "何も選択していないよ"
      : `選択しているのは${clothesColor.join(",")}だよ`;
  };

  // weatherAndClothesに変更がある度にそれを使っているところを再レンダリングする。
  useEffect(() => {
    console.log("clothesColor updated:", clothesColor);
  }, [clothesColor]);

  return (
    <>
      {/* <WeatherButton selectedClothes={clothesColor} selectedCloth={'blue'} /> */}
      <Button
        key={"blue"}
        variant="contained"
        color="primary"
        sx={{ marginRight: "8px" }}
        onClick={() => clickClothe("blue")}
      >
        青い服
      </Button>
      <Button
        key={"black"}
        variant="contained"
        color="secondary"
        sx={{ marginRight: "8px" }}
        onClick={() => clickClothe("black")}
      >
        黒い服
      </Button>
      <Button
        key={"green"}
        variant="contained"
        color="success"
        sx={{ marginRight: "8px" }}
        onClick={() => clickClothe("green")}
      >
        緑の服
      </Button>
      <p>{selectedColorMessage()}</p>
    </>
  );
};

export default ClothesArea;
