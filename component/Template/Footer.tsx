import { Box, Paper } from "@mui/material";
import { FC } from "react";
import RecommendPicture from "../Organisms/RecommendPicture";
import FooterIcons from "../Organisms/FooterIcons";

const Footer: FC = () => {
  return (
    <Box sx={{ borderTop: 3 }}>
      <p>これより下はフッターです</p>
      <RecommendPicture />
      <FooterIcons />
    </Box>
  );
};

export default Footer;