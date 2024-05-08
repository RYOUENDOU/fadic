import { FC, useEffect, useRef } from "react";
import CalendarText from "../Atoms/CalendarText";
import CalendarBigText from "../Atoms/CalendarBigText";
import CalendarWeekText from "../Atoms/CalendarWeekText";
import { Box, Button } from "@mui/material";
import { AdfScanner, AllInclusive, Android, Clear } from "@mui/icons-material";
import Image from "next/image";
import { FavoriteInfo } from "../Types/FavoriteInfo";

const FavoriteInfoList: FavoriteInfo[] = [
  {
    month: "3",
    date: "/31",
    week: "日",
    purpose: "おでかけ",
    weather: "sunny",
    minTemp: 10,
    maxTemp: 20,
    tops_color: "yellow",
    bottoms_type: "pants",
    bottoms_color: "blue",
    image: "/imageCheck.png",
  },
  {
    month: "4",
    date: "/1",
    week: "月",
    purpose: "日常",
    weather: "cloudy",
    minTemp: 11,
    maxTemp: 21,
    tops_color: "green",
    bottoms_type: "skirt",
    bottoms_color: "black",
    image: "/imageCheck.png",
  },
  {
    month: "4",
    date: "/2",
    week: "火",
    purpose: "ビジネス",
    weather: "rainy",
    minTemp: 12,
    maxTemp: 22,
    tops_color: "black",
    bottoms_type: "pants",
    bottoms_color: "black",
    image: "/imageCheck.png",
  },
  {
    month: "4",
    date: "/3",
    week: "水",
    purpose: "アウトドア",
    weather: "cloudy",
    minTemp: 13,
    maxTemp: 23,
    tops_color: "blue",
    bottoms_type: "skirt",
    bottoms_color: "green",
    image: "/imageCheck.png",
  },
  {
    month: "4",
    date: "/4",
    week: "木",
    purpose: "日常",
    weather: "sunny",
    minTemp: 14,
    maxTemp: 24,
    tops_color: "yellow",
    bottoms_type: "pants",
    bottoms_color: "blue",
    image: "/imageCheck.png",
  },
];

const CordinateList: FC = () => {
  const displayTops = (color: string): React.ReactNode => {
    return <Android fontSize="large" style={{ color: color }} />;
  };

  const displayBottoms = (type: string, color: string): React.ReactNode => {
    if ("bottoms" == type) {
      return <AdfScanner fontSize="large" style={{ color: color }} />;
    } else {
      return <AllInclusive fontSize="large" style={{ color: color }} />;
    }
  };

  return (
    <Box marginBottom={10}>
      {FavoriteInfoList.map((favoriteInfo, index) => (
        <Box
          key={index}
          marginTop={3}
          marginBottom={3}
          sx={{ display: "grid", gridTemplateColumns: "180px 1fr" }}
        >
          <Box>
            <Box display={"flex"} marginBottom={2}>
              <CalendarText text={favoriteInfo.month} />
              <CalendarBigText text={favoriteInfo.date} />
              <CalendarWeekText text={favoriteInfo.week} />
            </Box>
            <Button
              sx={{
                backgroundColor: "silver",
                borderRadius: "20px",
                color: "white",
                height: 25,
                "&:hover": { backgroundColor: "rgba(100, 190, 220, 0.8)" },
                marginBottom: "10px",
              }}
            >
              {favoriteInfo.purpose}
            </Button>

            <Box display={"flex"}>
              <Image
                src={`/icon/${favoriteInfo.weather}Icon_calendar.png`}
                width={25}
                height={25}
                alt="test_image"
                style={{ marginBottom: "2px" }}
              />
              <Box sx={{ marginLeft: "10px" }}>
                <CalendarText
                  text={`${favoriteInfo.maxTemp}°|${favoriteInfo.minTemp}°`}
                />
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "white",
                height: "50px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "120px",
                }}
              >
                {displayTops(favoriteInfo.tops_color)}
                <Box paddingTop={1}>
                  <Clear color="disabled" fontSize="small" />
                </Box>

                {displayBottoms(
                  favoriteInfo.bottoms_type,
                  favoriteInfo.bottoms_color
                )}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={"/imageCheck.png"}
              width={190}
              height={190}
              alt="test_image"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CordinateList;
