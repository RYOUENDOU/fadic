import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

export const Login: FC = () => {
  const router = useRouter();

  const moveSelectClothes = () => {
    router.push("/SelectClothes");
  };

  const moveCreateNuroComponent = () => {
    router.push("/NuroComponent");
  };

  return (
    <>
      <Box sx={{ padding: "16px" }}>
        <Box
          sx={{
            fontFamily: "Monospace",
            fontSize: "h6.fontSize",
            m: 1,
            fontStyle: "oblique",
          }}
        >
          今日着ていく服をシミュレートする
        </Box>
        <Button variant="contained" onClick={moveSelectClothes}>
          服を選択する
        </Button>
      </Box>
      <Box>
        <Button onClick={moveCreateNuroComponent}>
          nuro光で使うコンポーネント作成
        </Button>
      </Box>
    </>
  );
};
