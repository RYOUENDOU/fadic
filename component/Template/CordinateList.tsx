import { FC } from "react";
import { Box } from "@mui/material";
import { FavoriteInfo } from "../Types/FavoriteInfo";
import CalendarListInfo from "./CalendarListInfo";
import PictureForCalendarList from "../Atoms/PictureForCalendarList";

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
    image: "/zoro.png",
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
  return (
    <Box marginBottom={10}>
      {FavoriteInfoList.map((favoriteInfo, index) => (
        <>
          <Box
            key={index}
            marginTop={3}
            marginBottom={3}
            sx={{ display: "grid", gridTemplateColumns: "180px 1fr" }}
          >
            <CalendarListInfo favoriteInfo={favoriteInfo} />
            <PictureForCalendarList picture={favoriteInfo.image} />
          </Box>
          <Box border={"solid 0.1px"} borderColor={"gainsboro"} />
        </>
      ))}
    </Box>
  );
};

export default CordinateList;
