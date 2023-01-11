import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink as Link } from "react-router-dom";
import { useStyles } from "./HeaderStyles";

export default function SidenavData() {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashobard", link: "/", icon: <DashboardIcon /> },
  ];

  return (
    <List>
      {listItemData.map((item, i) => (
        <ListItem
          exact
          component={Link}
          to={item.link}
          className={classes.navlinks}
          activeClassName={classes.activeNavlinks}
        >
          <ListItemText>{item.label}</ListItemText>
        </ListItem>
      ))}
    </List>

    // <List>
    //   {listItemData.map((item, i) => (
    //     <ListItem component={Link} to={item.link} key={i}>
    //       <ListItemIcon>{item.icon}</ListItemIcon>
    //       <ListItemText>{item.label}</ListItemText>
    //     </ListItem>
    //   ))}
    // </List>
  );
}
