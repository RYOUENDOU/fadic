import { Box, Paper } from "@mui/material";
import { FC } from "react";
import ClothesIcon from "../Atoms/ClothesIcon";
import ColorIcons from "../Molecules/ColorIcons";

type Props = {
  isFirstRegister: boolean;
  clothesType: string;
  selectedClothesColorList: string[];
  setSelectedClothesColorList: (selectedClothesColorList: string[]) => void;
};

const ClothesCard: FC<Props> = ({
  isFirstRegister,
  clothesType,
  selectedClothesColorList,
  setSelectedClothesColorList,
}) => {

  return (
    <Paper
      elevation={0}
      sx={{
        minHeight: "14vh",
        display: "grid",
        gridTemplateColumns: "3fr 5fr",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "5%",
        backgroundColor: isFirstRegister ? "" : "gainsboro"
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
