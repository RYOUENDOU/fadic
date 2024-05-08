import { Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  text: string;
};

const CalendarWeekText: FC<Props> = ({ text }) => {
  return (
    <Box marginLeft={1} marginTop={2}>
      <Typography variant="subtitle1" color="#222222" fontWeight={"bold"}>
        {text}
      </Typography>
    </Box>
  );
};
export default CalendarWeekText;
