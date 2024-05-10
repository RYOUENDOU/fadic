import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography, css } from "@mui/material";
import React, { FC } from "react";
import { AdfScanner, AllInclusive, Android, Clear } from "@mui/icons-material";
import { RecommendPictureInfo } from "../Types/RecommendPictureInfo";

// reccomend画像の一覧。実際にはDBから取得
const images = ["/imageCheck.png", "/zoro.png", "/imageCheck.png"];
const topsColor: string = "yellow";

const recommendPictureList: RecommendPictureInfo[] = [
  {
    image: "/imageCheck.png",
    topsColor: "yellow",
    bottomsType: "tops",
    bottomsColor: "black",
  },
  {
    image: "/zoro.png",
    topsColor: "gray",
    bottomsType: "skirt",
    bottomsColor: "red",
  },
  {
    image: "/imageCheck.png",
    topsColor: "green",
    bottomsType: "bottoms",
    bottomsColor: "blue",
  },
];

const RecommendFassion: FC = () => {
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
    // 横幅を端末に応じて可変させたい
    <Box
      sx={{
        marginTop: "5%",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // spaceBetween={5}
        // slidesPerView={1.1} //一度に表示するスライドの数
        pagination={{
          clickable: true,
        }}
        loop={true}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {recommendPictureList.map(
          (pictureInfo: RecommendPictureInfo, index: number) => {
            return (
              // styleでcenter指定することで画像を真ん中に配置できた
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // marginLeft: "15px"
                }}
              >
                <Box>
                  <Image
                    src={pictureInfo.image}
                    width={320}
                    height={320}
                    alt="test_image"
                  />
                  {/* 画像の下のアイコンを下の方に配置 */}
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
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          width: "120px",
                        }}
                      >
                        {displayTops(pictureInfo.topsColor)}
                        {/* <Android fontSize="large" /> */}
                        <Box paddingTop={1}>
                          <Clear color="disabled" fontSize="small" />
                        </Box>
                        {displayBottoms(
                          pictureInfo.bottomsType,
                          pictureInfo.bottomsColor
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </Box>
  );
};

export default RecommendFassion;
