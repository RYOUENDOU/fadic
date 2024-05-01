import { Box, Container } from "@mui/material";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";
import { Position } from "@/component/Types/Position";
import { getCurrentLocation } from "@/hooks/location";

const RegisterClothes: FC = () => {
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await getCurrentLocation();
      setPosition(location);
    };
    fetchLocation();
  }, []);

  return (
    <>
      <Container>
        遊び場。ロケーションも取れる
        <TutorialFooter nextPagePath={"home"} />
        <Box sx={{ height: "300px", width: "300px" }}>
          <Image
            src={"/zoro.png"}
            layout="fill"
            objectFit="contain"
            alt={"背景画像"}
          />
        </Box>
      </Container>
      {position && <div>{position.coords.latitude}, {position.coords.longitude}</div>}
    </>
  );
};

export default RegisterClothes;