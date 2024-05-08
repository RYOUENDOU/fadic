import { Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  text: string;
};

const CalendarText: FC<Props> = ({ text}) => {
  return (
    <Box >
    <Typography
      variant="body1"
      color="#222222"
    >
      {text}
    </Typography>
    </Box>
  );
};
export default CalendarText;
