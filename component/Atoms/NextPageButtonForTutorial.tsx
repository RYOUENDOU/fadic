import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";

type Props = {
  nextPagePath: string;
  isFinalPage: boolean;
};

const NextPageButtonForTutorial: FC<Props> = ({
  nextPagePath,
  isFinalPage,
}) => {
  const router = useRouter();

  const moveNextPage = () => {
    router.push(nextPagePath);
  };

  const buttonText = (): string => {
    return isFinalPage ? "始める" : "次へ";
  };

  return (
    <Button
      sx={{
        width: "20vh",
        backgroundColor: "#333333",
        color: "white",
        ":hover": {
          backgroundColor: "#666666",
        },
      }}
      onClick={() => moveNextPage()}
    >
      {buttonText()}
    </Button>
  );
};

export default NextPageButtonForTutorial;
