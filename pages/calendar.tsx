import { Box, Container } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import CalendarArea from "@/component/Organisms/CalendarArea";
import Footer from "@/component/Organisms/Footer";
import CordinateList from "@/component/Template/CordinateList";

const Calendar: FC = () => {
  return (
    <>
      <Container >
        <CalendarArea />
        {/* <CordinateList /> */}
      </Container>
      <Footer />
    </>
  );
};
export default Calendar;
