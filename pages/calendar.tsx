import { Container } from "@mui/material";
import { FC } from "react";
import CalendarArea from "@/component/Organisms/CalendarArea";
import Footer from "@/component/Organisms/Footer";
import MenuArea from "@/component/Template/MenuArea";

const Calendar: FC = () => {
  return (
    <>
      <MenuArea isWhiteMenu={false}/>
      <Container>
        <CalendarArea />
        {/* <CordinateList /> */}
      </Container>
      <Footer />
    </>
  );
};
export default Calendar;
