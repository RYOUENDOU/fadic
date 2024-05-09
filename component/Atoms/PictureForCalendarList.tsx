import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";

type Props = {
  picture: string;
};

const PictureForCalendarList: FC<Props> = ({ picture }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={picture} width={190} height={190} alt="test_image" />
    </Box>
  );
};
export default PictureForCalendarList;
