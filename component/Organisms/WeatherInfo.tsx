import { Box, Paper, Typography } from "@mui/material";
import { FC } from "react";
import ContentText from "../Atoms/ContentText";
import { Android } from "@mui/icons-material";
import Image from "next/image";
import { WeatherData } from "../Types/WeatherData";

type Props = {
  selectDate: number;
  setSelectDate: (selectDate: number) => void;
};
 // 実際はバックエンドから取得してくる情報
const weatherDataList: WeatherData[] = [
  {
    date: "4/30 水",
    weather: "sunny",
    minTemp: 0,
    maxTemp: 10,
  },
  {
    date: "5/1 木",
    weather: "sunny",
    minTemp: 4,
    maxTemp: 14,
  },
  {
    date: "5/2 金",
    weather: "cloudy",
    minTemp: 8,
    maxTemp: 18,
  },
  {
    date: "5/3 土",
    weather: "rainy",
    minTemp: 12,
    maxTemp: 22,
  },
];

const WeatherInfo: FC<Props> = ({ selectDate, setSelectDate }) => {
  const iconColor = (iconIndex: number): string => {
    if (selectDate == iconIndex) {
      return "rgba(100, 190, 220, 0.8)";
    }
    return "";
  };

  const selectIcon = (iconIndex: number) => () => {
    setSelectDate(iconIndex);
  };
  return (
    <>
      <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
        {weatherDataList.map((weatherData, index) => (
          <Box key={index} display={"grid"} height={90}>
            <Box
              margin={1}
              sx={{ backgroundColor: iconColor(index) }}
              onClick={selectIcon(index)}
            >
              <ContentText text={weatherData.date}></ContentText>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={`/icon/${weatherData.weather}Icon.png`}
                  width={25}
                  height={25}
                  alt="test_image"
                />
              </Box>
              <ContentText
                text={`${weatherData.maxTemp}°| ${weatherData.minTemp}°`}
              />
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{ borderBottom: "1px solid white", width: "90%", margin: "auto" }}
      ></Box>
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
