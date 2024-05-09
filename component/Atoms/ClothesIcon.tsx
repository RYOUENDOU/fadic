import { Box } from "@mui/material";
import React, { FC } from "react";
import Image from "next/image";

type Props = {
  clothesType: string;
};
const ClothesCard: FC<Props> = ({ clothesType }) => {
  const displayIcon = (): React.ReactNode => {
    switch (clothesType) {
      case "tops":
        return (
          <Image
            src="/icon/topsIcon.png"
            width={65}
            height={70}
            alt="test_image"
          />
        );
      case "pants":
        return (
          <Image
            src="/icon/buttomsIcon.png"
            width={53}
            height={70}
            alt="test_image"
          />
        );
      case "skirt":
        return (
          <Image
            src="/icon/skirtIcon.png"
            width={53}
            height={70}
            alt="test_image"
          />
        );
      default:
        <p>アイコン不明</p>;
    }
  };
  return <Box>{displayIcon()}</Box>;
};

export default ClothesCard;
