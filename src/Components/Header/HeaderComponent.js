import React from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import {
  Routes, // instead of "Routes"
  Route,
} from "react-router-dom";

import Dashboard from "../Body/Dashboard/Dashboard";
import BlogComponent from "../Body/BlogComponent";
import Link from "../Body/Link";
import Logout from "../Body/Logout";
import Sidebarnotification from "../Body/Sidebarnotification";
import { Box } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";

const HeaderComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Sidenav />

      <Box className={classes.wrapper}>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/blog" element={<BlogComponent />} />

          <Route exact path="/link" element={<Link />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route
            exact
            path="/notification"
            render={() => <Sidebarnotification />}
          />
        </Routes>
      </Box>
    </div>
  );
};

export default HeaderComponent;
