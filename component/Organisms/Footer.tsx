import {
  CalendarMonth,
  DoorSlidingOutlined,
  Home,
  Person,
} from "@mui/icons-material";
import { Box, Button, Icon } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

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
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <Button
          sx={{
            height: "10vh",
            backgroundColor: "gainsboro",
            "&:hover": { backgroundColor: "silver" },
            display: "flex",
            flexFlow: "column",
          }}
          onClick={() => sendPath("/")}
        >
          <div></div>
          <Home />
          ホーム
        </Button>
        <Button
          sx={{
            height: "10vh",
            backgroundColor: "gainsboro",
            "&:hover": { backgroundColor: "silver" },
            display: "flex",
            flexFlow: "column",
          }}
          onClick={() => sendPath("/calendar")}
        >
          <CalendarMonth />
          カレンダー
        </Button>
        <Button
          sx={{
            height: "10vh",
            backgroundColor: "gainsboro",
            "&:hover": { backgroundColor: "silver" },
            display: "flex",
            flexFlow: "column",
          }}
        >
          <DoorSlidingOutlined />
          画面3
        </Button>
      </Box>
    </>
  );
};

export default Footer;
