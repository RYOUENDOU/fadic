import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography, css } from "@mui/material";
import { FC } from "react";
import { Android, Clear, CoPresent } from "@mui/icons-material";

// カルーセルにする画像のソースをリストにします
const images = ["/rufi.png", "/zoro.png", "/sanji.png"];

const ReccomendPicture: FC = () => {
  return (
    // 横幅を端末に応じて可変させたい
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} //一度に表示するスライドの数
        pagination={{
          clickable: true,
        }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
        // navigation //スライドを前後させるためのボタン、スライドの左右にある
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {images.map((src: string, index: number) => {
          return (
            // styleでcenter指定することで画像を真ん中に配置できた
            <SwiperSlide
              key={`${index}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                {/* 画像の下のアイコンを下の方に配置 */}
                <Image src={src} width={150} height={150} alt="test_image" />
                <Box
                  sx={{
                    display: "flex",
                    flexFlow: "column",
                    marginBottom: "50px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Android fontSize="large"/>
                    <Clear color="disabled" fontSize="small"/>
                    <CoPresent fontSize="large"/>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default ReccomendPicture;
