import React from "react";

import {
  Box,
  MenuItem,
  Button,
  Menu,
  ListItem,
  Avatar,
} from "@material-ui/core";

import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import image from "../Navtabs/mine2.jpeg";
import { useStyles } from "../HeaderStyles";

const Profile = () => {
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
    },
    {
      label: "Logout",
      icon: <ExitToAppIcon />,
    },
  ];
  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<Avatar className={classes.navAvatar}></Avatar>}
      ></Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropDownData.map((item, i) => (
          <MenuItem key={i} component={ListItem} onClick={handleClose}>
            <ListItem>{item.icon}</ListItem>
            <ListItem>{item.label}</ListItem>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Profile;

// import React from "react";

// import {
//   Box,
//   MenuItem,
//   Button,
//   Menu,
//   ListItem,
//   Avatar,
// } from "@material-ui/core";

// import SettingsIcon from "@mui/icons-material/Settings";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import image from "../Navtabs/mine2.jpeg";
// import { useStyles } from "../HeaderStyles";

// const Profile = () => {
//   const classes = useStyles();

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   console.log("Hello");

//   const dropDownData = [
//     {
//       label: "Settings",
//       icon: <SettingsIcon />,
//     },
//     {
//       label: "Logout",
//       icon: <ExitToAppIcon />,
//     },
//   ];
//   return (
//     <Box>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//         startIcon={<Avatar src={image} className={classes.navAvatar}></Avatar>}
//       ></Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         {dropDownData.map((item, i) => (
//           <MenuItem key={i} component={ListItem} onClick={handleClose}>
//             <ListItem>{item.icon}</ListItem>
//             <ListItem>{item.label}</ListItem>
//           </MenuItem>
//         ))}
//       </Menu>
//     </Box>
//   );
// };

// export default Profile;
