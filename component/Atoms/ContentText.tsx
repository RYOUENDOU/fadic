import { Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  text: string;
};

const ContentText: FC<Props> = ({ text }) => {
  return (
    <Typography
    fontSize={"small"}
    padding={"4% 8% 4% 8%"}
      textAlign={"center"}
      color={"white"}
      sx={{ whiteSpace: "pre-line" }}
    >
      {text}
    </Typography>
  );
};

export default ContentText;
