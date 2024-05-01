import { Box, Button } from "@mui/material";
import { FC } from "react";

const activeButtonColor = (): string => {
  return "dodgerblue";
};
const passiveButtonColor = (): string => {
  return "white";
};
const activeButtonTextColor = (): string => {
  return "white";
};
const passiveButtonTextColor = (): string => {
  return "#222222";
};

type Props = {
  isMaleActive: boolean;
  setIsMaleActive: (isMaleActive: boolean) => void;
};

const SelectSexButtons: FC<Props> = ({ isMaleActive, setIsMaleActive }) => {
  const handleButtonClick = (selected: boolean): void => {
    setIsMaleActive(selected);
  };

  return (
    <>
      <Box sx={{}}>
        <Button
          onClick={() => handleButtonClick(true)}
          sx={{
            height: "15%",
            width: "50%",
            color: isMaleActive
              ? activeButtonTextColor
              : passiveButtonTextColor,
            backgroundColor: isMaleActive
              ? activeButtonColor
              : passiveButtonColor,
            borderRadius: "8px 0 0 8px",
            borderRight: "none",
            "&:hover": {
              backgroundColor: isMaleActive
                ? activeButtonColor
                : passiveButtonColor,
            },
          }}
        >
          男性
        </Button>
        <Button
          onClick={() => handleButtonClick(false)}
          sx={{
            width: "50%",
            color: !isMaleActive
              ? activeButtonTextColor
              : passiveButtonTextColor,
            backgroundColor: !isMaleActive
              ? activeButtonColor
              : passiveButtonColor,
            borderRadius: "0 8px 8px 0",
            borderLeft: "none",
            "&:hover": {
              backgroundColor: !isMaleActive
                ? activeButtonColor
                : passiveButtonColor,
            },
          }}
        >
          女性
        </Button>
      </Box>
    </>
  );
};

export default SelectSexButtons;
