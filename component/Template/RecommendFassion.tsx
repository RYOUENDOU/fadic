import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography, css } from "@mui/material";
import { FC } from "react";
import { Android, Clear, CoPresent } from "@mui/icons-material";
import { ButtomIcon } from "../Types/ButtomIcon";
import { RecommendPictureInfo } from "../Types/RecommendPictureInfo";

// reccomend画像の一覧。実際にはDBから取得
const images = ["/imageCheck.png", "/zoro.png", "/imageCheck.png"];
const topsColor: string = "yellow";
const bottom: ButtomIcon = {type: "bottom", color:"black"}

const recommendPictureList: RecommendPictureInfo[] = [{
  image: "/imageCheck.png",
  topsColor: "white",
  bottomsType: "bottoms",
  bottomsColor: "black"
},{
  image: "/zoro.png",
  topsColor: "red",
  bottomsType: "skirt",
  bottomsColor: "red"
},{
  image: "/imageCheck.png",
  topsColor: "green",
  bottomsType: "bottoms",
  bottomsColor: "white"
}]

const RecommendFassion: FC = () => {
  return (
    // 横幅を端末に応じて可変させたい
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",

      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} //一度に表示するスライドの数
        pagination={{
          clickable: true,
        }}
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
                <Image src={src} width={330} height={330} alt="test_image" />
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
                      backgroundColor: "white",
                      height: "50px",
                    }}
                  >
                    <Box sx={{display: "flex"}}>
                    <Android fontSize="large" />
                    </Box>
                    <Clear color="disabled" fontSize="small" />
                    <CoPresent fontSize="large" />
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

export default RecommendFassion;
