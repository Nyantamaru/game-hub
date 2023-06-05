import { Box, Heading, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Fragment>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>

        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error has ocurred."}
        </Text>
      </Box>
    </Fragment>
  );
};

export default ErrorPage;
