import { Box, Paper } from "@mui/material";
import { FC } from "react";
import ClothesIcon from "../Atoms/ClothesIcon";
import { Height } from "@mui/icons-material";
import ColorIcons from "../Molecules/ColorIcons";
import { HasClothesColors } from "../Types/HasClothesColors";


type Props = {
    clothesType: string;
    clothesColorOptions: string[];
    selectedClothesColors: HasClothesColors;
    setSelectedClothesColors: (selectedClothesColors: HasClothesColors) => void
}

const ClothesCard: FC<Props> = ({clothesType, clothesColorOptions, selectedClothesColors, setSelectedClothesColors}) => {
  return (
    <Paper
      sx={{
        minHeight: "12vh",
        display: "grid",
        gridTemplateColumns: "3fr 5fr",
        alignItems: "center",
        textAlign: "center",
        marginBottom: '5%'
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
      >
        <ClothesIcon clothesType={clothesType}/>
      </Box>
      <Box>
        <ColorIcons clothesColorOptions={clothesColorOptions}/>
      </Box>
    </Paper>
  );
};

export default ClothesCard;
