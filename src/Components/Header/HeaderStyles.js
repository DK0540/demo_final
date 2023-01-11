import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { grey } from "@material-ui/core/colors";
import { blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  logo: {
    color: "white",
  },
  toolbar: {
    display: "flex",
    flexFlow: "flow-wrap",
    justifyContent: "space-between",
  },
  navlist: {
    minWidth: "250px",
    maxWidth: "300px",
  },

  ulAvatar: {
    backgroundColor: blue["A200"],
    color: "white",
  },
  navAvatar: {
    width: "35px",
    height: "35px",
  },
  appbar: {
    backgroundColor: blue["#123b5c"],
  },
  drawerPaper: {
    width: "250px",
    marginTop: "64px",
  },

  //wrapper of main contianer
  wrapper: {
    minHeight: "100vh",
    height: "auto",
    background: "#efefef",
    marginTop: "0px",
    padding: theme.spacing(2, 2, 0, 34),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
      marginTop: "45px",
    },
  },

  //Side nav
  drawerPaper: {
    width: "250px",
    marginTop: "65px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  navlinks: {
    color: blueGrey["A400"],
    "& :hover , &:hover div": {
      color: blue["A200"],
    },
    " & div": {
      color: blueGrey["A400"],
    },
  },
  activeNavlinks: {
    color: blue["A700"],
    "& div": {
      color: blue["A700"],
    },
  },
  navButton: {
    width: " 100%",
    textTransform: "capitalize",
  },
}));
