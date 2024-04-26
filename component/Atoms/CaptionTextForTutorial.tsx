import { Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  text: string;
  marginBottom?: number;
};

const CaptionTextForTutorial: FC<Props> = ({ text, marginBottom = 0.5 }) => {
  return (
    <Typography variant="caption" color="#222222" sx={{ whiteSpace: "pre-line", fontWeight: "bold", marginBottom: "200px"}}>
      {text}
    </Typography>
  );
};
export default CaptionTextForTutorial;
