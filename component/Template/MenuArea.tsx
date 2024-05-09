import { Box, Drawer } from "@mui/material";
import { FC, useState } from "react";
import Image from "next/image";

const MenuArea: FC = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <Box margin={2}>
      <Image
        src={"/icon/hamburger_menu.png"}
        width={30}
        height={30}
        alt="test_image"
        onClick={() => setDrawerOpened(true)}
      />
      <Drawer
        anchor={"right"}
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}
      ></Drawer>
    </Box>
  );
};
export default MenuArea;
