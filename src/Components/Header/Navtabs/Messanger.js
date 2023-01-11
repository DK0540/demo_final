import React from "react";
// import "./profil.css";
import {
  Box,
  MenuItem,
  IconButton,
  Menu,
  ListItem,
  Avatar,
  Badge,
  ListItemIcon,
  List,
  ListItemText,
} from "@material-ui/core";

import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useStyles } from "../HeaderStyles";

const Messangers = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("Hello");

  const dropDownData = [
    {
      label: "Settings",
      icon: <SettingsIcon />,
      desc: "Likes my feed..",
      name: "Harry",
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
      desc: "Likes my feed..",
      name: "Base",
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
      desc: "Likes my feed..",
      name: "Jon",
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
      desc: "Likes my feed..",
      name: "Giri",
    },
  ];
  return (
    <Box>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={3} color="secondary">
          <ChatBubbleIcon />
        </Badge>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List className={classes.navlist}>
          {dropDownData.map((item, i) => (
            <ListItem key={i} component={ListItem} onClick={handleClose}>
              <ListItemIcon>
                <Avatar className={classes.ulAvatar}>
                  {item.name[0].toUpperCase()}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                secondary={item.desc}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
};

export default Messangers;
