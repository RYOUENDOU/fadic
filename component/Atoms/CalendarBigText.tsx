import { Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  text: string;
};

const CalendarBigText: FC<Props> = ({ text}) => {
  return (
    <Box >
    <Typography
      variant="h4"
      color="#222222"
    >
      {text}
    </Typography>
    </Box>
  );
};
export default CalendarBigText;
