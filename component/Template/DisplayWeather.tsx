import { Box, Paper, Typography } from "@mui/material";
import { FC } from "react";
import WeatherInfo from "../Organisms/WeatherInfo";

const DisplayWeather: FC = () => {
  return (
    <>
      <Typography textAlign={"center"} color={"white"}>
        愛媛県松山市
      </Typography>
      <Box
        maxWidth={"95%"}
        sx={{
          margin: "0 auto",
        }}
      >
        <Paper
          sx={{ backgroundColor: "rgba(145, 145, 145, 0.2)" }}
          elevation={0}
        >
          <WeatherInfo />
        </Paper>
      </Box>
    </>
  );
};

export default DisplayWeather;
