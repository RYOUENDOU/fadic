import {
  CalendarMonth,
  DoorSlidingOutlined,
  Home,
  Person,
} from "@mui/icons-material";
import { Box, Button, Icon } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

const FooterIcons: FC = () => {
  const router = useRouter();

// クリックしたらリストに追加されたり、リストにあったらremoveされたりする処理。
const clickIcon = () => {
  router.push("/");

};

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
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
          onClick={() => clickIcon()}

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
        >
          <CalendarMonth />
          画面2
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
        <Button
          sx={{
            height: "10vh",
            backgroundColor: "gainsboro",
            "&:hover": { backgroundColor: "silver" },
            display: "flex",
            flexFlow: "column",
          }}
        >
          <Person />
          画面4
        </Button>
      </Box>
    </>
  );
};

export default FooterIcons;
