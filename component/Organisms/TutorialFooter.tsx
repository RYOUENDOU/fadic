import { Box } from "@mui/material";
import { FC } from "react";
import NextPageButtonForTutorial from "../Atoms/NextPageButtonForTutorial";


type Props = {
    nextPagePath: string;
  };
const TutorialFooter: FC<Props> = ({ nextPagePath }) => {

  // すワイプっぽいやつ必要？あれスワイプする用のライブラリ使うから、今回みたいにスワイプ画像無い時は独自実装になりそう。あのアイコン優先度低そうなら後ろに置きたいのが本音
  return (
    <Box
      sx={{
        marginTop: "8%",
        width: "80%",
        textAlign: "center",
        position: "fixed",
        bottom: "5%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <NextPageButtonForTutorial nextPagePath={nextPagePath} />
    </Box>
  );
};

export default TutorialFooter;
