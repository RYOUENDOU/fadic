import { Assistant, Attachment, BackHand } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { FC } from "react";

type Props = {
  clothesType: string;
};
const ClothesCard: FC<Props> = ({ clothesType }) => {
  const displayIcon = (): React.ReactNode => {
    switch (clothesType) {
      case "tops":
        return <Attachment />;
        break;
      case "pants":
        return <Assistant />;
      case "skirt":
        return <BackHand />;
      default:
        <p>アイコン不明</p>;
    }
  };
  return (
    <Button
      sx={{
        height: "10vh",
        backgroundColor: "gainsboro",
        "&:hover": { backgroundColor: "silver" },
        display: "flex",
        flexFlow: "column",
      }}
    >
      <Box />
      {displayIcon()}
      {clothesType}
    </Button>
  );
};

export default ClothesCard;
