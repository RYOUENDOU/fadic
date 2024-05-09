import { Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  text: string;
};

const TitleText: FC<Props> = ({ text }) => {
  return (
    <Typography
      variant="caption"
      color="dimgray"
      sx={{ whiteSpace: "pre-line" }}
    >
      {text}
    </Typography>
  );
};
export default TitleText;
