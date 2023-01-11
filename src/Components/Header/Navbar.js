import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

import Profile from "./Navtabs/Profile";
import Notification from "./Navtabs/Notification";
import { Box, Hidden, IconButton } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Messangers from "./Navtabs/Messanger";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logo}></Typography>

          <Hidden smDown>
            <Box style={{ display: "flex" }}>
              <Messangers />
              <Notification />
              <Profile />
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit" onClick={() => console.log("hello ")}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import AppBar from "@material-ui/core/AppBar";

// import Profile from "./Navtabs/Profile";
// import Notification from "./Navtabs/Notification";
// import { Box, Hidden, IconButton } from "@material-ui/core";
// import { useStyles } from "./HeaderStyles";
// import Messangers from "./Navtabs/Messanger";
// import MenuIcon from "@mui/icons-material/Menu";

// const Navbar = () => {
//   const classes = useStyles();

//   return (
//     <div>
//       <AppBar className={classes.appbar} position="static">
//         <Toolbar className={classes.toolbar}>
//           <Typography variant="h6" className={classes.logo}>
//             Logo
//           </Typography>

//           <Hidden smDown>
//             <Box style={{ display: "flex" }}>
//               <Messangers />
//               <Notification />
//               <Profile />
//             </Box>
//           </Hidden>
//           <Hidden mdUp>
//             <IconButton color="inherit" onClick={() => console.log("hello ")}>
//               <MenuIcon />
//             </IconButton>
//           </Hidden>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default Navbar;
