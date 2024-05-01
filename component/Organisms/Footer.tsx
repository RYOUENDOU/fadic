import {
  CalendarMonth,
  DoorSlidingOutlined,
  Home,
  Person,
} from "@mui/icons-material";
import { Box, Button, Icon } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  const router = useRouter();

  // クリックしたらリストに追加されたり、リストにあったらremoveされたりする処理。
  const sendPath = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "white",
          display: "grid",
          height: "8%",
          gridTemplateColumns: "1fr 1fr 1fr",

          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "8%",
            "& img": {
              height: "9%",
              marginTop: "5%",
            },
  
          }}
        >
          <Image
            src={"/icon/homeIcon.png"}
            alt={"home"}
            height={50}
            width={35}
            onClick={() => sendPath("/")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "10%",
            "& img": {
              height: "95%",
              marginTop: "5%",
            },

          }}
        >
          <Image
            src={"/icon/calendarIcon.png"}
            alt={"home"}
            height={50}
            width={60}
            onClick={() => sendPath("/calendar")}
          />
        </Box>
        <Box
          sx={{
            "& img": {
              height: "95%",
              marginTop: "5%",
            },
          }}
        >
          <Image
            src={"/icon/closetIcon.png"}
            alt={"home"}
            height={50}
            width={70}
            onClick={() => sendPath("/closet")}
          />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
