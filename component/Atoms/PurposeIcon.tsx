import { Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";


type Props = {
  iconPath: string;
};

const PurposeIcon: FC<Props> = ({ iconPath }) => {
    return (<Image
        src={iconPath}
        width={25}
        height={25}
        alt="test_image"
        style={{marginRight: "3px"}}
      />);
};
export default PurposeIcon;
