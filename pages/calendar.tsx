import { Container } from "@mui/material";
import { FC } from "react";
import CalendarArea from "@/component/Organisms/CalendarArea";
import Footer from "@/component/Organisms/Footer";

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
