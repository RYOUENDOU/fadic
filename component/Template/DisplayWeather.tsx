import { Box, Paper, Typography } from "@mui/material";
import { FC } from "react";
import WeatherInfo from "../Organisms/WeatherInfo";

type Props = {
  selectDate: number;
  setSelectDate: (selectDate: number) => void;
}

const DisplayWeather: FC<Props> = ({selectDate, setSelectDate}) => {
  return (
    <>
      <Typography textAlign={"center"} color={"white"}>
        愛媛県松山市
      </Typography>
      <Box
        maxWidth={"95%"}
        sx={{
          margin: "8px auto 0",
        }}
      >
        <Paper
          sx={{ backgroundColor: "rgba(145, 145, 145, 0.2)" }}
          elevation={0}
        >
          <WeatherInfo selectDate={selectDate} setSelectDate={setSelectDate}/>
        </Paper>
      </Box>
    </>
  );
};

export default DisplayWeather;
