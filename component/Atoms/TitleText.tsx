import { Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  titleText: string;
  marginBottom?: number;
};

const TitleText: FC<Props> = ({ titleText, marginBottom = 0.5}) => {
  return (
    <Typography variant="subtitle1" color="dodgerblue" sx={{ marginBottom: `${marginBottom}%`, whiteSpace: "pre-line" }}>
      {titleText}
    </Typography>
  );
};
export default TitleText;
