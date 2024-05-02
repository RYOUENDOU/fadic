import { Box, Container } from "@mui/material";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";
import { Position } from "@/component/Types/Position";
import { getCurrentLocation } from "@/hooks/location";

const UsableLocation: FC = () => {
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await getCurrentLocation();
      setPosition(location);
    };
    fetchLocation();
  }, []);
  return (
    <Container>
      <TutorialFooter nextPagePath={"about_beta_version"} />
      <Image
        src={"/onbording/confirmation_location.png"}
        layout={`fill`}
        objectFit={`cover`}
        alt={"背景画像"}
        style={{ zIndex: -1 }}
      />
      <Box marginTop={5}>
            {position && <div>{`緯度：${position.coords.latitude}　　 経度：${position.coords.longitude}`}</div>}
            </Box>
    </Container>
    
  );
};
export default UsableLocation;
