import { Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  text: string;
  marginBottom?: number;
};

const CaptionTextForTutorial: FC<Props> = ({ text, marginBottom = 2 }) => {
  return (
    <Box marginBottom={marginBottom}>
    <Typography
      variant="caption"
      color="#222222"
      sx={{ whiteSpace: "pre-line", fontWeight: "bold" }}
    >
      {text}
    </Typography>
    </Box>
  );
};
export default CaptionTextForTutorial;
