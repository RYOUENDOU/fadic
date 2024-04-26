import { FC } from "react";
import ColorIcon from "../Atoms/ColorIcon";
import { Box } from "@mui/material";

type Props = {
  clothesColorOptions: string[];
};
const ColorIcons: FC<Props> = ({ clothesColorOptions }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {clothesColorOptions.map((color, index) => (
        <Box key={index} sx={{ width: "25%" }}>
          <ColorIcon color={color}/>
        </Box>

      ))}
        
      </Box>
    </>
  );
};

export default ColorIcons;
