import { FC, useEffect, useRef } from "react";
import CalendarText from "../Atoms/CalendarText";
import CalendarBigText from "../Atoms/CalendarBigText";
import CalendarWeekText from "../Atoms/CalendarWeekText";
import { Box, Button } from "@mui/material";
import { AdfScanner, AllInclusive, Android, Clear } from "@mui/icons-material";
import Image from "next/image";
import { FavoriteInfo } from "../Types/FavoriteInfo";

type Props = {
  favoriteInfo: FavoriteInfo;
};

const CordinateListInfo: FC<Props> = ({ favoriteInfo }) => {
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
          paddingBottom: "0px"
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
  );
};

export default CordinateListInfo;
