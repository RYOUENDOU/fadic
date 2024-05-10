import { Box, Drawer } from "@mui/material";
import { FC, useState } from "react";
import Image from "next/image";
import DrawerMenu from "../Organisms/DrawerMenu";

type Props = {
  isWhiteMenu: boolean;
};

const MenuArea: FC<Props> = ({ isWhiteMenu = false }) => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <Box margin={2}>
      <Image
        src={
          isWhiteMenu
            ? "/icon/hamburger_menu.png"
            : "/icon/hamburger_menu_black.png"
        }
        width={30}
        height={30}
        alt="test_image"
        onClick={() => setDrawerOpened(true)}
      />
      <Drawer
        anchor={"left"}
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        PaperProps={{ style: { width: "50%" } }}
      >
        <DrawerMenu setDrawerOpened={setDrawerOpened} />
      </Drawer>
    </Box>
  );
};
export default MenuArea;
