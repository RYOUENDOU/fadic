import { Box, Paper, Typography } from "@mui/material";
import { FC } from "react";
import ContentText from "../Atoms/contentText";
import { Android } from "@mui/icons-material";

const WeatherInfo: FC = () => {
  return (
    <>
      <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
        <Box display={"grid"}>
          <ContentText text={"4 / 30 水"}></ContentText>
          <Box sx={{ textAlign: "center" }}>
            <Android />
          </Box>
          <ContentText text={"23°| 16°"} />
        </Box>
        <Box display={"grid"}>
          <ContentText text={"4 / 30 水"}></ContentText>
          <Box sx={{ textAlign: "center" }}>
            <Android />
          </Box>
          <ContentText text={"23°| 16°"} />
        </Box>
        <Box display={"grid"}>
          <ContentText text={"4 / 30 水"}></ContentText>
          <Box sx={{ textAlign: "center" }}>
            <Android />
          </Box>
          <ContentText text={"23°| 16°"} />
        </Box>
        <Box display={"grid"}>
          <ContentText text={"4 / 30 水"}></ContentText>
          <Box sx={{ textAlign: "center" }}>
            <Android />
          </Box>
          <ContentText text={"23°| 16°"} />
        </Box>
      </Box>
        <Box sx={{ borderBottom: "1px solid black" }}></Box>
      <Box>
        <ContentText
          text={
            "日中はポカポカですが、朝方は冷え込むので上着を持って行きましょう"
          }
        />
      </Box>
    </>
  );
};

export default WeatherInfo;
