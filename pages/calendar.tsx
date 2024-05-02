import { Container } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import Calendar from "@/component/Organisms/Calendar";
import Footer from "@/component/Organisms/Footer";

const calendar: FC = () => {
  return (
    <>
      <Container>
        <Calendar></Calendar>
      </Container>
      <Footer />
    </>
  );
};
export default calendar;
