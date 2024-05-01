import { Box, Paper } from "@mui/material";
import { FC } from "react";
import ClothesIcon from "../Atoms/ClothesIcon";
import ColorIcons from "../Molecules/ColorIcons";

type Props = {
  clothesType: string;
  selectedClothesColorList: string[];
  setSelectedClothesColorList: (selectedClothesColorList: string[]) => void;
};

const ClothesCard: FC<Props> = ({
  clothesType,
  selectedClothesColorList,
  setSelectedClothesColorList,
}) => {
  return (
    <Paper
      sx={{
        minHeight: "12vh",
        display: "grid",
        gridTemplateColumns: "3fr 5fr",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "5%",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ClothesIcon clothesType={clothesType} />
      </Box>
      <Box>
        <ColorIcons
          clothesType={clothesType}
          selectedClothesColorList={selectedClothesColorList}
          setSelectedClothesColorList={setSelectedClothesColorList}
        />
      </Box>
    </Paper>
  );
};

export default ClothesCard;
