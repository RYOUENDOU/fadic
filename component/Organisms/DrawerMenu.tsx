import {
  Settings,
  MenuBook,
  KeyboardBackspaceOutlined,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FC } from "react";

type Props = {
  setDrawerOpened: (drawerOppened: boolean) => void;
};

const DrawerMenu: FC<Props> = ({ setDrawerOpened }) => {
  const closeDrawer = () => {
    setDrawerOpened(false);
  };
  return (
    <Box>
      <List component={"nav"}>
        <ListItemButton onClick={() => closeDrawer()}>
          <Box display={"flex"}>
            <KeyboardBackspaceOutlined
              style={{ marginTop: "3px", marginRight: "5px" }}
            />
            <ListItemText primary="戻る" />
          </Box>
        </ListItemButton>
        <ListItemButton>
          <Box display={"flex"}>
            <MenuBook style={{ marginTop: "3px", marginRight: "5px" }} />
            <ListItemText primary="フィードバック" />
          </Box>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default DrawerMenu;
