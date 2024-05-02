import { Box, Paper, Typography } from "@mui/material";
import { FC } from "react";
import ContentText from "../Atoms/contentText";
import { Android } from "@mui/icons-material";
import Image from "next/image";

const WeatherInfo: FC = () => {
  return (
    <>
      <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
        <Box display={"grid"} height={90}>
          <ContentText text={"4 / 30 水"}></ContentText>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={"/icon/sunnyIcon.png"}
                width={25}
                height={25}
                alt="test_image"
              />
            </Box>
          <ContentText text={"23°| 16°"} />
        </Box>
        <Box display={"grid"}>
          <ContentText text={"4 / 30 水"}></ContentText>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={"/icon/cloudyIcon.png"}
                width={25}
                height={25}
                alt="test_image"
              />
            </Box>
          <ContentText text={"23°| 16°"} />
        </Box>
        <Box display={"grid"}>
          <ContentText text={"4 / 30 水"}></ContentText>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={"/icon/cloudyIcon.png"}
                width={25}
                height={25}
                alt="test_image"
              />
            </Box>
          <ContentText text={"23°| 16°"} />
        </Box>
        <Box display={"grid"}>
          <ContentText text={"4 / 30 水"}></ContentText>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={"/icon/rainyIcon.png"}
                width={25}
                height={25}
                alt="test_image"
              />
            </Box>
          <ContentText text={"23°| 16°"} />
        </Box>
      </Box>
      <Box sx={{ borderBottom: "1px solid white", width: "90%", margin: "auto"}}></Box>
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
