import { Box, Button } from "@mui/material";
import { FC } from "react";
import {
  Accessibility,
  AddAPhoto,
  AddAlarm,
  AddIcCall,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import PurposeIcon from "../Atoms/PurposeIcon";


// 実際にはDBから取得する
const options: string[] = ["日常", "ビジネス", "おでかけ", "アウトドア"];

// ここまで

const PurposeOption: FC = () => {
  const displayIcon = (option: string): React.ReactNode => {
    switch (option) {
      case "日常":
        return <PurposeIcon iconPath="/icon/lifeIcon.png" />
      case "ビジネス":
        return <PurposeIcon iconPath="/icon/businessIcon.png" />
      case "おでかけ":
        return <PurposeIcon iconPath="/icon/walkIcon.png" />
      case "アウトドア":
        return <PurposeIcon iconPath="/icon/outdoorIcon.png" />
      default:
        <></>;
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        navigation={false}
        loop={false}
        style={{ height: "100%" }}
      >
        {options.map((option, index) => (
          <SwiperSlide key={index} style={{ width: "fit-content" }}>
            <Box sx={{ paddingLeft: "5px", paddingRight: "5px" }}>
              <Button
                sx={{
                  backgroundColor: "rgba(145, 145, 145, 0.2)",
                  whiteSpace: "nowrap",
                  flexGrow: 1,
                  borderRadius: "20px",
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(100, 190, 220, 0.8)" },
                }}
              >
                {displayIcon(option)}
                {option}
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PurposeOption;
