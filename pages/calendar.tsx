import { Container } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import Calendar from "@/component/Organisms/Calendar";

const calendar: FC = () => {
  return (
    <Container>
      <Calendar></Calendar>
    </Container>
  );
};
export default calendar;
