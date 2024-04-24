import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

type Props = {
  nextPagePath: string;
};

const NextPageButtonForTutorial: FC<Props> = ({ nextPagePath }) => {
  const router = useRouter();

  // 渡された引数を元に遷移先を動的に変更

  const moveNextPage = () => {
    router.push(nextPagePath);
  };

  return (
    <Button  sx={{ width: "20vh",backgroundColor: "#333333", color: "white",":hover": {
      backgroundColor: "#666666",
    }, }} onClick={() => moveNextPage()}>
      次へ
    </Button>
  );
};

export default NextPageButtonForTutorial;
