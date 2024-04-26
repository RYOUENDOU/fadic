import { Circle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FC } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Props = {
    color: string;
}

const ColorIcons: FC<Props> = ({color}) => {
    return (
        <>

 <Circle fontSize="large" sx={{color: color}}/> 
 <CheckCircleIcon fontSize="large" sx={{color: color}}/>
 </>
    );
  };
  
  export default ColorIcons;