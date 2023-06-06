import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </Fragment>
  );
};

export default Layout;
