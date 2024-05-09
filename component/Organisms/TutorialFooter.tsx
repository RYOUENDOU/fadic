import { Box } from "@mui/material";
import { FC } from "react";
import NextPageButtonForTutorial from "../Atoms/NextPageButtonForTutorial";

type Props = {
  nextPagePath: string;
  isFinalPage?: boolean;
};
const TutorialFooter: FC<Props> = ({ nextPagePath, isFinalPage = false }) => {
  return (
    <Box
      sx={{
        marginTop: "8%",
        width: "80%",
        textAlign: "center",
        position: "absolute",
        bottom: "5%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <NextPageButtonForTutorial
        nextPagePath={nextPagePath}
        isFinalPage={isFinalPage}
      />
    </Box>
  );
};

export default TutorialFooter;
