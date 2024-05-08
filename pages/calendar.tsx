import { Box, Container } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import Calendar from "@/component/Organisms/Calendar";
import Footer from "@/component/Organisms/Footer";
import CordinateList from "@/component/Template/CordinateList";

const calendar: FC = () => {
  return (
    <>
      <Container >
        {/* <Calendar></Calendar> */}
        <CordinateList />
      </Container>
      <Footer />
    </>
  );
};
export default calendar;
