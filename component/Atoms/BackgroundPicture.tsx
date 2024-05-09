import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";

type Props = {
  picture: string;
};

const PictureForTutorial: FC<Props> = ({ picture }) => {
  return (
    <Image
        src={picture}
        layout={"fill"}
        objectFit={"cover"}
        alt={"背景画像"}
        style={{ zIndex: -1 }}
      />
  );
};
export default PictureForTutorial;
